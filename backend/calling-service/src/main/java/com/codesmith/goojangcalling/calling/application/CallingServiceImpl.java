package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.message.CallingCreateMessage;
import com.codesmith.goojangcalling.calling.dto.message.CallingTerminateMessage;
import com.codesmith.goojangcalling.calling.dto.message.StatusChangeMessage;
import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.request.OccurrenceCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.*;
import com.codesmith.goojangcalling.calling.persistence.*;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import com.codesmith.goojangcalling.infra.aws.S3Client;
import com.codesmith.goojangcalling.infra.member.HospitalClient;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CallingServiceImpl implements CallingService{

    private final OccurrenceRepository occurrenceRepository;
    private final OccurrenceFileRepository occurrenceFileRepository;
    private final OccurrenceTagRepository occurrenceTagRepository;
    private final CallingRepository callingRepository;
    private final TagRepository tagRepository;

    private final HospitalClient hospitalClient;
    private final S3Client s3Client;

    private final CallingValidator callingValidator;

    private final SimpMessagingTemplate simpMessagingTemplate;

    private final EntityManager em;

    @Override
    public OccurrenceCreateResponse addOccurrence(Long memberId, OccurrenceCreateRequest occurrenceCreateRequest) {
        Occurrence occurrence = new Occurrence(memberId, occurrenceCreateRequest.getKtas(), occurrenceCreateRequest.getAgeGroup(),
                occurrenceCreateRequest.getGender(), occurrenceCreateRequest.getSymptom(),
                occurrenceCreateRequest.getLatitude(), occurrenceCreateRequest.getLongitude(), occurrenceCreateRequest.getAddress());
        Occurrence savedOccurrence = occurrenceRepository.save(occurrence);

        List<OccurrenceTag> occurrenceTagList = occurrenceCreateRequest.getTags().stream()
                .map(o -> new OccurrenceTag(occurrence, o))
                .collect(Collectors.toList());
        occurrenceTagRepository.saveAll(occurrenceTagList);

        List<OccurrenceFile> occurrenceFileList = occurrenceCreateRequest.getFiles().stream()
                .map(o -> new OccurrenceFile(occurrence, o.getFilePath(), o.getContentType(), o.getSize()))
                .collect(Collectors.toList());
        occurrenceFileRepository.saveAll(occurrenceFileList);
        return new OccurrenceCreateResponse(savedOccurrence);
    }

    public List<CallingStatusResponse> addCalling(Long memberId, CallingCreateRequest callingCreateRequest) {
        Occurrence occurrence = occurrenceRepository.findById(callingCreateRequest.getOccurrenceId()).orElseThrow();

        List<HospitalSearchResponse> searchHospitalList = searchHospital(occurrence.getLatitude(), occurrence.getLongitude(), callingCreateRequest.getDistance()).block();

        List<Calling> callingList = searchHospitalList
                .stream()
                .map(o -> new Calling(occurrence, o.getId(), Status.PENDING, null, ""))
                .collect(Collectors.toList());
        List<Calling> savedCallingList = callingRepository.saveAll(callingList);

        List<CallingStatusResponse> callingStatusResponseList = new ArrayList<>();

        for (int i=0; i< savedCallingList.size(); i++) {
            callingStatusResponseList.add(new CallingStatusResponse(savedCallingList.get(i), searchHospitalList.get(i)));
        }
        // 병원 리스트 반환
        simpMessagingTemplate.convertAndSend("/topic/" + memberId, callingStatusResponseList);
        return callingStatusResponseList;
    }

    @Override
    public void createCallingMessage(List<CallingStatusResponse> callingStatusResponseList, Long occurrenceId) {
        Occurrence occurrence = occurrenceRepository.findById(occurrenceId).orElseThrow();
        List<String> occurrenceTagList = tagRepository.findAllTagNameByOccurrenceId(occurrenceId);
        List<String> occurrenceFileList = occurrenceFileRepository.findAllFileNameByOccurrenceId(occurrenceId);
        callingStatusResponseList.forEach(o -> {
            CallingCreateMessage callingCreateMessage = new CallingCreateMessage(occurrence, o, occurrenceTagList, occurrenceFileList);
            // 병원들에게 요청 전달
            simpMessagingTemplate.convertAndSend("/topic/" + 9999, callingCreateMessage);
//            simpMessagingTemplate.convertAndSend("/topic/" + o.getMemberId(), callingCreateMessage);
        });
    }

    @Override
    public List<FileUploadResponse> fileUpload(List<MultipartFile> files) {
        return s3Client.uploadFIle(files);
    }

    @Transactional
    @Override
    public void changeCallingStatus(Long memberId, StatusChangeMessage changeMessage) {
        callingValidator.validateCalling(changeMessage.getCallingId());
        Calling calling = callingRepository.findById(changeMessage.getCallingId()).get();
        calling.updateCalling(changeMessage.getStatus(), changeMessage.getReason());
    }

    @Transactional
    @Override
    public TransferInfoResponse createTransfer(Long memberId, Long callingId) {
        // TODO : 현재 발생한 사고 상태들을 종료됐다고 변경
        callingValidator.validateCalling(callingId);
        Calling selectedCalling = callingRepository.findById(callingId).get();
        callingValidator.validateApprovedCalling(selectedCalling);
        selectedCalling.fixCalling(Status.FIXED);
//        simpMessagingTemplate.convertAndSend("/topic/status/" + selectedCalling.getMemberId(), new CallingTerminateMessage(selectedCalling));
        simpMessagingTemplate.convertAndSend("/topic/status/" + 9999, new CallingTerminateMessage(selectedCalling));
        em.flush();
        em.clear();
        changePendingCalling(selectedCalling);
        // TODO : 수락한 요청을 토대로 이송 만들기 (이송 서비스에 내놓으라고 요청)
        return null;
    }

    private void changePendingCalling(Calling selectedCalling) {
        Occurrence occurrence = selectedCalling.getOccurrence();
        List<Calling> callingList = callingRepository.findAllByOccurrence(occurrence);
        callingList.forEach(o -> {
            if (o.getStatus().equals(Status.PENDING)) {
                o.terminateCalling(Status.TERMINATED);
//                simpMessagingTemplate.convertAndSend("/topic/status/" + o.getMemberId(), new CallingTerminateMessage(o));
                // TODO : 상태들을 변경 후 병원들한테 종료됐다고 전달
                simpMessagingTemplate.convertAndSend("/topic/status/" + 9999, new CallingTerminateMessage(o));
            }
        });
    }

    @Override
    public Mono<List<HospitalSearchResponse>> searchHospital(Double latitude, Double longitude, Double distance) {
        return hospitalClient.searchHospital(latitude, longitude, distance);
    }
}
