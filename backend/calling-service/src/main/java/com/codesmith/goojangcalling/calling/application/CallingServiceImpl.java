package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.message.CallingCreateMessage;
import com.codesmith.goojangcalling.calling.dto.message.CallingStatusMessage;
import com.codesmith.goojangcalling.calling.dto.request.*;
import com.codesmith.goojangcalling.calling.dto.response.*;
import com.codesmith.goojangcalling.calling.persistence.*;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import com.codesmith.goojangcalling.infra.aws.S3Client;
import com.codesmith.goojangcalling.infra.kafka.CallingProducer;
import com.codesmith.goojangcalling.infra.openfeign.MemberServiceClient;
import com.codesmith.goojangcalling.infra.openfeign.TransferServiceClient;
import com.codesmith.goojangcalling.member.application.MemberService;
import com.codesmith.goojangcalling.member.persistence.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

    private final MemberService memberService;
    private final CallingProducer callingProducer;

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

    public List<CallingStatusResponse> createCalling(Long memberId, CallingCreateRequest callingCreateRequest) {
        if (callingCreateRequest.getStep() != 1L) {
            return addCalling(memberId, callingCreateRequest);
        }

        Occurrence occurrence = getOccurrence(callingCreateRequest.getOccurrenceId());
        callingValidator.validatePendingCalling(occurrence);

        List<HospitalSearchResponse> searchHospitalList = searchHospital(occurrence.getLatitude(),
                occurrence.getLongitude(), callingCreateRequest.getDistance(), null);

        List<Calling> callingList = searchHospitalList
                .stream()
                .map(o -> new Calling(occurrence, o.getId(), Status.PENDING, null, ""))
                .collect(Collectors.toList());
        List<Calling> savedCallingList = callingRepository.saveAll(callingList);

        return getCallingStatusResponses(searchHospitalList, savedCallingList);
    }

    @Override
    public List<CallingStatusResponse> addCalling(Long memberId, CallingCreateRequest callingCreateRequest) {
        Occurrence occurrence = getOccurrence(callingCreateRequest.getOccurrenceId());

        List<Calling> pendingCallingList = new ArrayList<>();
        List<Long> pendingCallingMemberList = new ArrayList<>();
        List<Long> excludePendingCallingList = new ArrayList<>();
        callingRepository.findAllByOccurrence(occurrence)
                .forEach(o -> {
                    if (o.getStatus().equals(Status.PENDING)) {
                        pendingCallingList.add(o);
                        pendingCallingMemberList.add(o.getMemberId());
                    }
                    else {
                        excludePendingCallingList.add(o.getMemberId());
                    }
                });
        List<HospitalSearchResponse> searchHospitalList = searchHospital(occurrence.getLatitude(),
                occurrence.getLongitude(), callingCreateRequest.getDistance(), excludePendingCallingList.size() == 0 ? null : excludePendingCallingList);
        List<Calling> callingList = searchHospitalList.stream()
                .filter(o -> !pendingCallingMemberList.contains(o.getId()))
                .map(o -> new Calling(occurrence, o.getId(), Status.PENDING, null, ""))
                .collect(Collectors.toList());
        List<Calling> savedCallingList = callingRepository.saveAll(callingList);

        List<Calling> combinedAndSortedCallingList = Stream.concat(savedCallingList.stream(), pendingCallingList.stream())
                .sorted(Comparator.comparing(Calling::getMemberId))
                .collect(Collectors.toList());

        return getCallingStatusResponses(searchHospitalList, combinedAndSortedCallingList);
    }

    private Occurrence getOccurrence(Long occurrenceId) {
        callingValidator.validateOccurrence(occurrenceId);
        Occurrence occurrence = occurrenceRepository.findById(occurrenceId).get();
        return occurrence;
    }

    private List<CallingStatusResponse> getCallingStatusResponses(List<HospitalSearchResponse> searchHospitalList, List<Calling> callingList) {
        List<CallingStatusResponse> callingStatusResponseList = new ArrayList<>();
        for (int i=0; i< callingList.size(); i++) {
            callingStatusResponseList.add(new CallingStatusResponse(callingList.get(i), searchHospitalList.get(i)));
        }
        callingStatusResponseList.sort(Comparator.comparing(CallingStatusResponse::getDuration));
        return callingStatusResponseList;
    }

    @Override
    public void createCallingMessage(List<CallingStatusResponse> callingStatusResponseList, Long occurrenceId) {
        Occurrence occurrence = occurrenceRepository.findById(occurrenceId).orElseThrow();
        List<String> occurrenceTagList = tagRepository.findAllTagNameByOccurrenceId(occurrenceId);
        List<String> occurrenceFileList = occurrenceFileRepository.findAllFileNameByOccurrenceId(occurrenceId);
        callingStatusResponseList.forEach(o -> {
            CallingCreateMessage callingCreateMessage = new CallingCreateMessage(occurrence, o, occurrenceTagList, occurrenceFileList);
            callingProducer.sendCreateMessage(callingCreateMessage);
            // 병원들에게 요청 전달
            simpMessagingTemplate.convertAndSend("/topic/" + o.getMemberId(), callingCreateMessage);
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
        CallingStatusMessage callingStatusMessage = new CallingStatusMessage(callingStatusChangeRequest.getCallingId(), callingStatusChangeRequest.getStatus());
        callingProducer.sendUpdateMessage(callingStatusMessage);
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
        updateStatusAnsSend(selectedCalling);
        changePendingCalling(selectedCalling);
        Member member = memberService.getMember(selectedCalling.getMemberId());
        TransferCreateResponse transfer = transferServiceClient.createTransfer(new CreateTransferRequest(selectedCalling));
        transfer.setInfo(selectedCalling.getOccurrence(), member.getName(), member.getId());
        return transfer;
    }

    @Transactional
    @Override
    public void cancelCallingStatus(Long callingId) {
        callingValidator.validateCalling(callingId);
        Calling selectedCalling = callingRepository.findById(callingId).get();
        callingValidator.validateApprovedOrPendingCalling(selectedCalling);
        selectedCalling.cancelCalling();
        updateStatusAnsSend(selectedCalling);
    }

    private void updateStatusAnsSend(Calling selectedCalling) {
        CallingStatusMessage callingStatusMessage = new CallingStatusMessage(selectedCalling);
        simpMessagingTemplate.convertAndSend("/topic/status/" + selectedCalling.getMemberId(), callingStatusMessage);
        callingProducer.sendUpdateMessage(callingStatusMessage);
    }

    @Override
    public List<TransferHistoryResponse> getTransferHistoryList(Map<String, String> memberInfoMap) {
        List<Long> memberList = memberInfoMap.keySet().stream().map(Long::parseLong).collect(Collectors.toList());

        List<TransferHistoryResponse> transferHistoryResponseList = new ArrayList<>();
        callingRepository.findAllByMemberIdListAndStatus(memberList)
                .forEach(calling -> {
                    Occurrence occurrence = calling.getOccurrence();
                    List<String> occurrenceTagList = occurrenceTagRepository.findAllByOccurrence(occurrence);
                    List<String> ocuurenceFileList = occurrenceFileRepository.findAllFileNameByOccurrenceId(occurrence.getId());
                    transferHistoryResponseList.add(new TransferHistoryResponse(calling.getOccurrence(),
                            memberInfoMap.get(occurrence.getMemberId().toString()), occurrenceTagList, ocuurenceFileList, calling));
                });
        return transferHistoryResponseList;
    }

    private void changePendingCalling(Calling selectedCalling) {
        Occurrence occurrence = selectedCalling.getOccurrence();
        List<Calling> callingList = callingRepository.findAllByOccurrence(occurrence);
        callingList.forEach(o -> {
            if (o.getStatus().equals(Status.PENDING) && o.getId() != selectedCalling.getId()) {
                o.terminateCalling();
                updateStatusAnsSend(o);
            } else if (o.getStatus().equals(Status.APPROVED) && o.getId() != selectedCalling.getId()) {
                CallingStatusMessage callingStatusMessage = new CallingStatusMessage(o);
                callingStatusMessage.setStatus(Status.TERMINATED);
                simpMessagingTemplate.convertAndSend("/topic/status/" + o.getMemberId(), callingStatusMessage);
            }
        });
    }

    @Override
    public List<HospitalSearchResponse> searchHospital(Double latitude, Double longitude, Double distance, List<Long> ids) {
        return memberServiceClient.searchHospital(latitude, longitude, distance, ids);
    }
}