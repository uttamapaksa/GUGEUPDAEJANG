package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingRequest;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceFileRepository;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceRepository;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceTagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.Occurrence;
import com.codesmith.goojangcalling.calling.persistence.domain.OccurrenceFile;
import com.codesmith.goojangcalling.calling.persistence.domain.OccurrenceTag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CallingServiceImpl implements CallingService{

    private final OccurrenceRepository occurrenceRepository;
    private final OccurrenceFileRepository occurrenceFileRepository;
    private final OccurrenceTagRepository occurrenceTagRepository;


    @Override
    public void addOccurrence(Long memberId, CallingRequest callingRequest) {
        Occurrence occurrence = new Occurrence(memberId, callingRequest.getKtas(), callingRequest.getAgeGroup(), callingRequest.getGender(), callingRequest.getSymptom(), callingRequest.getLatitude(), callingRequest.getLongitude());
        occurrenceRepository.save(occurrence);

        List<OccurrenceTag> occurrenceTagList = callingRequest.getTags().stream()
                .map(o -> new OccurrenceTag(occurrence, o))
                .collect(Collectors.toList());
        occurrenceTagRepository.saveAll(occurrenceTagList);

        List<OccurrenceFile> occurrenceFileList = callingRequest.getFiles().stream()
                .map(o -> new OccurrenceFile(occurrence, o.getUploadUrl(), o.getContentType(), o.getSize()))
                .collect(Collectors.toList());
        occurrenceFileRepository.saveAll(occurrenceFileList);
    }
}
