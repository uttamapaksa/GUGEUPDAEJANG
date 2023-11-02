package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.message.CallingCreateMessage;
import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.request.OccurrenceCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.CallingStatusResponse;
import com.codesmith.goojangcalling.calling.dto.response.OccurrenceCreateResponse;
import com.codesmith.goojangcalling.calling.dto.response.HospitalSearchResponse;
import com.codesmith.goojangcalling.calling.persistence.*;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import com.codesmith.goojangcalling.infra.member.HospitalClient;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
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

    private final SimpMessagingTemplate simpMessagingTemplate;

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
        simpMessagingTemplate.convertAndSend("/topic/" + memberId, callingStatusResponseList);
        return callingStatusResponseList;
    }

    @Override
    public void createCallingMessage(List<CallingStatusResponse> callingStatusResponseList, Long occurrenceId) {
        Occurrence occurrence = occurrenceRepository.findById(occurrenceId).orElseThrow();
        List<String> occurrenceTagList = tagRepository.findAllTagNameByOccurrenceId(occurrenceId);
        List<String> occurrenceFileList = occurrenceFileRepository.findAllFillNameByOccurrenceId(occurrenceId);
        callingStatusResponseList.forEach(o -> {
            CallingCreateMessage callingCreateMessage = new CallingCreateMessage(occurrence, o, occurrenceTagList, occurrenceFileList);
            simpMessagingTemplate.convertAndSend("/topic/" + o.getMemberId(), callingCreateMessage);
        });
    }

    @Override
    public Mono<List<HospitalSearchResponse>> searchHospital(Double latitude, Double longitude, Double distance) {
        return hospitalClient.searchHospital(latitude, longitude, distance);
    }
}
