package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.request.CallingRequest;
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
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class OccurrenceTagRepositoryTest {

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    TestEntityManager em;

    private Occurrence occurrence;
    private Long memberId;
    private CallingRequest callingRequest;
    private List<String> tagNames;

    @BeforeEach
    void setCallingRequest() {
        List<FileUploadResponse> files = new ArrayList<>();
        files.add(new FileUploadResponse("https://codesmith-ggdj.s3.ap-northeast-2.amazonaws.com/62119bee-726d-4bd5-b6aa-07e65b39b951%EC%9C%A1%EA%B0%9C%EC%9E%A5.png", "image/png",122776L));
        tagNames = new ArrayList<>();
        tagNames.add("추락");
        memberId = 521L;
        callingRequest = new CallingRequest(files, KTAS.KTAS2, AgeGroup.YOUTH, Gender.MALE, "아파요", tagNames, 35.123, 127.123);
        occurrence = new Occurrence(memberId, callingRequest.getKtas(), callingRequest.getAgeGroup(), callingRequest.getGender(), callingRequest.getSymptom(), callingRequest.getLatitude(), callingRequest.getLongitude());
    }

    @DisplayName("사고_태그를_저장한다.")
    @Test
    void 사고_태그를_저장한다() throws Exception {
        String tagName = tagNames.get(0);
        Optional<Tag> optionalTag = tagRepository.findByName(tagName);
        assertFalse(optionalTag.isEmpty());
        Tag tag = optionalTag.get();
        OccurrenceTag occurrenceTag = new OccurrenceTag(occurrence, tag);

        OccurrenceTag savedOccurrenceTag = em.persist(occurrenceTag);

        assertThat(savedOccurrenceTag.getOccurrence()).isEqualTo(occurrence);
        assertThat(savedOccurrenceTag.getTag()).isEqualTo(tag);
    }
}