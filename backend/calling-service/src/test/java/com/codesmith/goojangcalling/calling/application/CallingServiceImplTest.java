package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import com.codesmith.goojangcalling.calling.dto.response.HospitalSearchResponse;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceFileRepository;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceRepository;
import com.codesmith.goojangcalling.calling.persistence.OccurrenceTagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import com.codesmith.goojangcalling.infra.member.HospitalClient;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.Arrays;
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

    @Mock
    private HospitalClient hospitalClient;

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
                .map(o -> new OccurrenceFile(occurrence, o.getFilePath(), o.getContentType(), o.getSize()))
                .collect(Collectors.toList());
        given(occurrenceRepository.save(Mockito.any(Occurrence.class))).willReturn(occurrence);
        given(occurrenceFileRepository.saveAll(Mockito.any(List.class))).willReturn(occurrenceFileList);
        given(occurrenceTagRepository.saveAll(Mockito.any(List.class))).willReturn(occurrenceTagList);

        callingService.addOccurrence(memberId, callingCreateRequest);

        verify(occurrenceRepository).save(Mockito.any(Occurrence.class));
        verify(occurrenceFileRepository).saveAll(Mockito.any(List.class));
        verify(occurrenceTagRepository).saveAll(Mockito.any(List.class));
    }

    @DisplayName("현재 위치로 수용가능한 병원들을 조회한다.")
    @Test
    public void 현재_위치로_수용가능한_병원들을_조회한다() throws Exception {
        Double latitude = 35.6;
        Double longitude = 127.22;
        Double distance = 10.0;
        List<HospitalSearchResponse> hospitalList = Arrays.asList(
                new HospitalSearchResponse("A1800441", "세종충남대학교병원", "세종특별자치시 보듬7로 20, 세종충남대학교병원 (도담동)", "1800-3114", "044-995-3010", 10L),
                new HospitalSearchResponse("A2302011", "재단법인베스티안재단베스티안병원","충청북도 청주시 흥덕구 오송읍 오송생명1로 191-0", "043-910-7575", "043-904-8925", 7L)
        );
        when(hospitalClient.searchHospital(latitude, longitude, distance)).thenReturn(Mono.just(hospitalList));

        Mono<List<HospitalSearchResponse>> hospitalSearchResponses = callingService.searchHospital(latitude, longitude, distance);
        Assertions.assertEquals(hospitalList, hospitalSearchResponses.block());
    }
}