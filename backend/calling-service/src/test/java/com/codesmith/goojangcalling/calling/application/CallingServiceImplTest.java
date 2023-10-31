package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceFileRepository;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceRepository;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceTagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.mockito.BDDMockito.*;


@ExtendWith(MockitoExtension.class)
class CallingServiceImplTest {

    @Mock
    private OccurrenceRepository occurrenceRepository;

    @Mock
    private OccurrenceFileRepository occurrenceFileRepository;

    @Mock
    private OccurrenceTagRepository occurrenceTagRepository;

    @InjectMocks
    private CallingServiceImpl callingService;

    private Occurrence occurrence;
    private Long memberId;
    private CallingCreateRequest callingCreateRequest;
    private List<FileUploadResponse> files;
    private List<Tag> tags;

    @BeforeEach
    void setCallingRequest() {
        files = new ArrayList<>();
        files.add(new FileUploadResponse("https://codesmith-ggdj.s3.ap-northeast-2.amazonaws.com/62119bee-726d-4bd5-b6aa-07e65b39b951%EC%9C%A1%EA%B0%9C%EC%9E%A5.png","image/png", 122776L));
        tags = new ArrayList<>();
        tags.add(new Tag(1L, "추락"));
        memberId = 521L;
        callingCreateRequest = new CallingCreateRequest(KTAS.KTAS2, AgeGroup.YOUTH, Gender.MALE, "아파요", 35.123, 127.123, tags, files);
        occurrence = new Occurrence(memberId, callingCreateRequest.getKtas(), callingCreateRequest.getAgeGroup(), callingCreateRequest.getGender(), callingCreateRequest.getSymptom(), callingCreateRequest.getLatitude(), callingCreateRequest.getLongitude());
    }

    @DisplayName("사고, 사고파일, 사고태그를 저장한다.")
    @Test
    void 사고_사고파일_사고태그를_저장한다() throws Exception {
        List<OccurrenceTag> occurrenceTagList = callingCreateRequest.getTags().stream()
                .map(o -> new OccurrenceTag(occurrence, o))
                .collect(Collectors.toList());
        List<OccurrenceFile> occurrenceFileList = callingCreateRequest.getFiles().stream()
                .map(o -> new OccurrenceFile(occurrence, o.getUploadUrl(), o.getContentType(), o.getSize()))
                .collect(Collectors.toList());
        given(occurrenceRepository.save(Mockito.any(Occurrence.class))).willReturn(occurrence);
        given(occurrenceFileRepository.saveAll(Mockito.any(List.class))).willReturn(occurrenceFileList);
        given(occurrenceTagRepository.saveAll(Mockito.any(List.class))).willReturn(occurrenceTagList);

        callingService.addOccurrence(memberId, callingCreateRequest);

        verify(occurrenceRepository).save(Mockito.any(Occurrence.class));
        verify(occurrenceFileRepository).saveAll(Mockito.any(List.class));
        verify(occurrenceTagRepository).saveAll(Mockito.any(List.class));
    }
}