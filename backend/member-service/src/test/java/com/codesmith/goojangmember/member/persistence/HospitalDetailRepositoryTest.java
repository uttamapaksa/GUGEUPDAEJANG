package com.codesmith.goojangmember.member.persistence;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class HospitalDetailRepositoryTest {

    @Autowired
    private HospitalDetailRepository hospitalDetailRepository;

    @DisplayName("특정_거리_이내의_병원들을_조회한다")
    @Test
    void 특정_거리_이내의_병원들을_조회한다() {
        Double latitude = 37.5665;
        Double longitude = 126.9780;
        Double distance = 5.0;

        List<String> hospitalList = hospitalDetailRepository.findHospitalWithinDistance(latitude, longitude, distance);

        Assertions.assertNotNull(hospitalList);
    }
}
