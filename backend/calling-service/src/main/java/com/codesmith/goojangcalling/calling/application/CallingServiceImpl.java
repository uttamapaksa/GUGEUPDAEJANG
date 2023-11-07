package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.message.CallingCreateMessage;
import com.codesmith.goojangcalling.calling.dto.message.CallingStatusMessage;
import com.codesmith.goojangcalling.calling.dto.request.CallingStatusChangeRequest;
import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.request.OccurrenceCreateRequest;
import com.codesmith.goojangcalling.calling.dto.request.CreateTransferRequest;
import com.codesmith.goojangcalling.calling.dto.response.*;
import com.codesmith.goojangcalling.calling.persistence.*;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import com.codesmith.goojangcalling.infra.aws.S3Client;
import com.codesmith.goojangcalling.infra.openfeign.MemberServiceClient;
import com.codesmith.goojangcalling.infra.openfeign.TransferServiceClient;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

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

    private final S3Client s3Client;

    private final CallingValidator callingValidator;

    private final SimpMessagingTemplate simpMessagingTemplate;

    private final MemberServiceClient memberServiceClient;
    private final TransferServiceClient transferServiceClient;

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
        callingValidator.validateOccurrence(callingCreateRequest.getOccurrenceId());
        Occurrence occurrence = occurrenceRepository.findById(callingCreateRequest.getOccurrenceId()).get();

        List<HospitalSearchResponse> searchHospitalList = searchHospital(occurrence.getLatitude(), occurrence.getLongitude(), callingCreateRequest.getDistance());

        List<Calling> callingList = searchHospitalList
                .stream()
                .map(o -> new Calling(occurrence, o.getId(), Status.PENDING, null, ""))
                .collect(Collectors.toList());
        List<Calling> savedCallingList = callingRepository.saveAll(callingList);

        List<CallingStatusResponse> callingStatusResponseList = new ArrayList<>();

        for (int i=0; i< savedCallingList.size(); i++) {
            callingStatusResponseList.add(new CallingStatusResponse(savedCallingList.get(i), searchHospitalList.get(i)));
        }
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
    public HospitalStatusResponse changeCallingStatus(CallingStatusChangeRequest callingStatusChangeRequest) {
        Calling calling = updateCallingStatus(callingStatusChangeRequest);

        sendToParamedic(callingStatusChangeRequest, calling);

        return getHospitalStatusResponse(calling);
    }

    private HospitalStatusResponse getHospitalStatusResponse(Calling calling) {
        BedCountResponse bedCount = memberServiceClient.getBedCount(calling.getMemberId());
        List<TransferListResponse> transferByMemberInTransferring = transferServiceClient.getTransferByMemberInTransferring(calling.getMemberId());
        if (bedCount.getBedCount() - transferByMemberInTransferring.size() > 0) {
            return new HospitalStatusResponse(false);
        }
        return new HospitalStatusResponse(true);
    }

    private void sendToParamedic(CallingStatusChangeRequest callingStatusChangeRequest, Calling calling) {
        Long memberId = calling.getOccurrence().getMemberId();
        simpMessagingTemplate.convertAndSend("/topic/status/" + memberId, callingStatusChangeRequest);
    }

    private Calling updateCallingStatus(CallingStatusChangeRequest callingStatusChangeRequest) {
        callingValidator.validateCalling(callingStatusChangeRequest.getCallingId());
        Calling calling = callingRepository.findById(callingStatusChangeRequest.getCallingId()).get();
        calling.updateCalling(callingStatusChangeRequest.getStatus(), callingStatusChangeRequest.getReason());
        return calling;
    }

    @Transactional
    @Override
    public TransferCreateResponse createTransfer(Long callingId) {
        callingValidator.validateCalling(callingId);
        Calling selectedCalling = callingRepository.findById(callingId).get();
        callingValidator.validateApprovedCalling(selectedCalling);
        selectedCalling.fixCalling();
//        simpMessagingTemplate.convertAndSend("/topic/status/" + selectedCalling.getMemberId(), new CallingTerminateMessage(selectedCalling));
        simpMessagingTemplate.convertAndSend("/topic/status/" + 9999, new CallingStatusMessage(selectedCalling));
        changePendingCalling(selectedCalling);
        MemberInfoResponse hospital = memberServiceClient.getMember(selectedCalling.getMemberId());
        TransferCreateResponse transfer = transferServiceClient.createTransfer(new CreateTransferRequest(selectedCalling));
        transfer.setInfo(selectedCalling.getOccurrence(), hospital.getName(), hospital.getId());
        return transfer;
    }

    @Transactional
    @Override
    public void cancelCallingStatus(Long callingId) {
        callingValidator.validateCalling(callingId);
        Calling selectedCalling = callingRepository.findById(callingId).get();
        callingValidator.validateApprovedOrPendingCalling(selectedCalling);
        selectedCalling.cancelCalling();
        //        simpMessagingTemplate.convertAndSend("/topic/status/" + selectedCalling.getMemberId(), new CallingTerminateMessage(selectedCalling));
        simpMessagingTemplate.convertAndSend("/topic/status/" + 9999, new CallingStatusMessage(selectedCalling));
    }

    private void changePendingCalling(Calling selectedCalling) {
        Occurrence occurrence = selectedCalling.getOccurrence();
        List<Calling> callingList = callingRepository.findAllByOccurrence(occurrence);
        callingList.forEach(o -> {
            if (o.getStatus().equals(Status.PENDING) && o.getId() != selectedCalling.getId()) {
                o.terminateCalling();
//                simpMessagingTemplate.convertAndSend("/topic/status/" + o.getMemberId(), new CallingTerminateMessage(o));
                simpMessagingTemplate.convertAndSend("/topic/status/" + 9999, new CallingStatusMessage(o));
            }
        });
    }

    @Override
    public List<HospitalSearchResponse> searchHospital(Double latitude, Double longitude, Double distance) {
        return memberServiceClient.searchHospital(latitude, longitude, distance);
    }
}
