package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.request.OccurrenceCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class CallingRepositoryTest {

    @Autowired
    TestEntityManager em;

    @Autowired
    private CallingRepository callingRepository;

    private Occurrence occurrence;
    private Long paramedicMemberId;
    private Long hospitalMemberId;
    private OccurrenceCreateRequest occurrenceCreateRequest;
    private List<Tag> tags;

    @BeforeEach
    void setCallingRequest() {
        List<FileUploadResponse> files = new ArrayList<>();
        files.add(new FileUploadResponse("https://codesmith-ggdj.s3.ap-northeast-2.amazonaws.com/62119bee-726d-4bd5-b6aa-07e65b39b951%EC%9C%A1%EA%B0%9C%EC%9E%A5.png", "image/png",122776L));
        tags = new ArrayList<>();
        tags.add(new Tag(1L, "추락"));
        paramedicMemberId = 521L;
        hospitalMemberId = 1040L;
        new OccurrenceCreateRequest(KTAS.KTAS2, AgeGroup.YOUTH, Gender.MALE, "아파요", 35.123, 127.123, "한밭대",tags, files);
        occurrenceCreateRequest = new OccurrenceCreateRequest(KTAS.KTAS2, AgeGroup.YOUTH, Gender.MALE, "아파요", 35.123, 127.123, "한밭대",tags, files);
        occurrence = new Occurrence(paramedicMemberId, occurrenceCreateRequest.getKtas(), occurrenceCreateRequest.getAgeGroup(),
                occurrenceCreateRequest.getGender(), occurrenceCreateRequest.getSymptom(), occurrenceCreateRequest.getLatitude(), occurrenceCreateRequest.getLongitude(), "한밭대");
    }

    @DisplayName("요청을 저장한다.")
    @Test
    void 요청을_저장한다() throws Exception {
        List<Calling> callingList = Arrays.asList(
                new Calling(occurrence, hospitalMemberId, Status.PENDING, null, "" ),
                new Calling(occurrence, hospitalMemberId, Status.PENDING, null, "" )
        );

        List<Calling> callings = callingRepository.saveAll(callingList);

        Assertions.assertThat(callings.size()).isEqualTo(callingList.size());
    }
}