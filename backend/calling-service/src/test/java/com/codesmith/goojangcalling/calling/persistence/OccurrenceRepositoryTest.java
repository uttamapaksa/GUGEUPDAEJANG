package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.request.OccurrenceCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class OccurrenceRepositoryTest {

    @Autowired
    TestEntityManager em;

    private Occurrence occurrence;
    private Long memberId;
    private OccurrenceCreateRequest occurrenceCreateRequest;

    @BeforeEach
    void setCallingRequest() {
        List<FileUploadResponse> files = new ArrayList<>();
        files.add(new FileUploadResponse("https://codesmith-ggdj.s3.ap-northeast-2.amazonaws.com/62119bee-726d-4bd5-b6aa-07e65b39b951%EC%9C%A1%EA%B0%9C%EC%9E%A5.png", "image/png",122776L));
        List<Tag> tags = new ArrayList<>();
        tags.add(new Tag(1L, "추락"));
        memberId = 521L;
        occurrenceCreateRequest = new OccurrenceCreateRequest(KTAS.KTAS2, AgeGroup.YOUTH, Gender.MALE, "아파요", 35.123, 127.123, "한밭대", tags, files);
        occurrence = new Occurrence(memberId, occurrenceCreateRequest.getKtas(), occurrenceCreateRequest.getAgeGroup(), occurrenceCreateRequest.getGender(), occurrenceCreateRequest.getSymptom(),
                occurrenceCreateRequest.getLatitude(), occurrenceCreateRequest.getLongitude(), "한밭대");
    }

    @DisplayName("사고를 저장한다.")
    @Test
    void 사고를_저장한다() throws Exception {
        Occurrence savedOccurrence = em.persist(occurrence);

        assertThat(savedOccurrence.getKtas()).isEqualTo(occurrenceCreateRequest.getKtas());
        assertThat(savedOccurrence.getAgeGroup()).isEqualTo(occurrenceCreateRequest.getAgeGroup());
        assertThat(savedOccurrence.getGender()).isEqualTo(occurrenceCreateRequest.getGender());
        assertThat(savedOccurrence.getSymptom()).isEqualTo(occurrenceCreateRequest.getSymptom());
        assertThat(savedOccurrence.getLatitude()).isEqualTo(occurrenceCreateRequest.getLatitude());
        assertThat(savedOccurrence.getLongitude()).isEqualTo(occurrenceCreateRequest.getLongitude());
    }
}