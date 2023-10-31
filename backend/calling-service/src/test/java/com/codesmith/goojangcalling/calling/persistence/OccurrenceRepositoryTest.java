package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.request.CallingRequest;
import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import com.codesmith.goojangcalling.calling.persistence.domain.AgeGroup;
import com.codesmith.goojangcalling.calling.persistence.domain.Gender;
import com.codesmith.goojangcalling.calling.persistence.domain.KTAS;
import com.codesmith.goojangcalling.calling.persistence.domain.Occurrence;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.ArrayList;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class OccurrenceRepositoryTest {

    @Autowired
    TestEntityManager em;

    private Long memberId;

    @BeforeEach
    void setOccurrence() {
        memberId = 521L;
    }

    @DisplayName("사고를 저장한다.")
    @Test
    void 사고를_저장한다() throws Exception {
        ArrayList<FileUploadResponse> files = new ArrayList<>();
        files.add(new FileUploadResponse("https://codesmith-ggdj.s3.ap-northeast-2.amazonaws.com/62119bee-726d-4bd5-b6aa-07e65b39b951%EC%9C%A1%EA%B0%9C%EC%9E%A5.png","image/png",122776L));
        ArrayList<String> tagNames = new ArrayList<>();
        tagNames.add("추락");
        CallingRequest callingRequest = new CallingRequest(files, KTAS.KTAS2, AgeGroup.YOUTH, Gender.MALE, "아파요", tagNames, 35.123, 127.123);
        Occurrence occurrence = new Occurrence(memberId, callingRequest.getKtas(), callingRequest.getAgeGroup(), callingRequest.getGender(), callingRequest.getSymptom(), callingRequest.getLatitude(), callingRequest.getLongitude());

        Occurrence savedOccurrence = em.persist(occurrence);

        assertThat(savedOccurrence.getKtas()).isEqualTo(callingRequest.getKtas());
        assertThat(savedOccurrence.getAgeGroup()).isEqualTo(callingRequest.getAgeGroup());
        assertThat(savedOccurrence.getGender()).isEqualTo(callingRequest.getGender());
        assertThat(savedOccurrence.getSymptom()).isEqualTo(callingRequest.getSymptom());
        assertThat(savedOccurrence.getLatitude()).isEqualTo(callingRequest.getLatitude());
        assertThat(savedOccurrence.getLongitude()).isEqualTo(callingRequest.getLongitude());
    }
}