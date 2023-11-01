package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.HospitalSearchResponse;
import com.codesmith.goojangcalling.calling.persistence.CallingRepository;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceFileRepository;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceRepository;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceTagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import com.codesmith.goojangcalling.infra.member.HospitalClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CallingServiceImpl implements CallingService{

    private final OccurrenceRepository occurrenceRepository;
    private final OccurrenceFileRepository occurrenceFileRepository;
    private final OccurrenceTagRepository occurrenceTagRepository;
    private final CallingRepository callingRepository;
    private final HospitalClient hospitalClient;

    @Override
    public void addOccurrence(Long memberId, CallingCreateRequest callingCreateRequest) {
        Occurrence occurrence = new Occurrence(memberId, callingCreateRequest.getKtas(), callingCreateRequest.getAgeGroup(), callingCreateRequest.getGender(), callingCreateRequest.getSymptom(), callingCreateRequest.getLatitude(), callingCreateRequest.getLongitude());
        occurrenceRepository.save(occurrence);

        List<OccurrenceTag> occurrenceTagList = callingCreateRequest.getTags().stream()
                .map(o -> new OccurrenceTag(occurrence, o))
                .collect(Collectors.toList());
        occurrenceTagRepository.saveAll(occurrenceTagList);

        List<OccurrenceFile> occurrenceFileList = callingCreateRequest.getFiles().stream()
                .map(o -> new OccurrenceFile(occurrence, o.getFilePath(), o.getContentType(), o.getSize()))
                .collect(Collectors.toList());
        occurrenceFileRepository.saveAll(occurrenceFileList);

        addCalling(callingCreateRequest, occurrence);
    }

    public void addCalling(CallingCreateRequest callingCreateRequest, Occurrence occurrence) {
        List<Calling> callingList = searchHospital(callingCreateRequest.getLatitude(), callingCreateRequest.getLongitude(), 10.0)
                .block()
                .stream()
                .map(o -> new Calling(occurrence, o.getId(), Status.PENDING, null, ""))
                .collect(Collectors.toList());
        callingRepository.saveAll(callingList);
    }

    @Override
    public Mono<List<HospitalSearchResponse>> searchHospital(Double latitude, Double longitude, Double distance) {
        return hospitalClient.searchHospital(latitude, longitude, distance);
    }
}
