package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.persistence.domain.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class MemberRepositoryTest {
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private HospitalDetailRepository hospitalDetailRepository;

    @Autowired
    private SafetyCenterRepository safetyCenterRepository;

    @Autowired
    private ParamedicDetailRepository paramedicDetailRepository;

    @DisplayName("회원이 성공적으로 추가된다")
    @Test
    void 회원이_성공적으로_추가된다() {
        Member newMember = new Member("example@example.com", "password123", "hsptmember", "profile.jpg", Role.HOSPITAL);
        Member savedMember = memberRepository.save(newMember);

        assertNotNull(savedMember.getId());
        assertThat(savedMember.getEmail()).isEqualTo(newMember.getEmail());
        assertThat(savedMember.getName()).isEqualTo(newMember.getName());
    }

    @DisplayName("병원 회원이 성공적으로 추가된다")
    @Test
    void 병원_회원이_성공적으로_추가된다() {
        Member newMember = new Member("example@example.com", "password123", "hsptmember", "profile.jpg", Role.HOSPITAL);
        Member savedMember = memberRepository.save(newMember);

        assertNotNull(savedMember.getId());
        assertThat(savedMember.getEmail()).isEqualTo(newMember.getEmail());
        assertThat(savedMember.getName()).isEqualTo(newMember.getName());

        HospitalDetail hospitalDetail = new HospitalDetail("unique_id", newMember, "123-456-789", "987-654-321", "123 Main St, City, Country", 40.7128, -74.0060);
        HospitalDetail savedHospitalDetail = hospitalDetailRepository.save(hospitalDetail);

        assertNotNull(savedHospitalDetail.getId());
        assertThat(savedHospitalDetail.getTelephone1()).isEqualTo(hospitalDetail.getTelephone1());
        assertThat(savedHospitalDetail.getTelephone2()).isEqualTo(hospitalDetail.getTelephone2());
        assertThat(savedHospitalDetail.getAddress()).isEqualTo(hospitalDetail.getAddress());
        assertEquals(savedMember, savedHospitalDetail.getMember());
    }

    @DisplayName("구급대원 회원이 성공적으로 추가된다")
    @Test
    void 구급대원_회원이_성공적으로_추가된다() {
        Member newMember = new Member("paramedic@example.com", "password123", "Paramedic User", "profile.jpg", Role.PARAMEDIC);
        Member savedMember = memberRepository.save(newMember);

        assertNotNull(savedMember.getId());
        assertThat(savedMember.getEmail()).isEqualTo(newMember.getEmail());
        assertThat(savedMember.getName()).isEqualTo(newMember.getName());

        SafetyCenter safetyCenter = safetyCenterRepository.findById(1L).get();

        assertNotNull(safetyCenter.getId());
        assertThat(safetyCenter.getName()).isEqualTo(safetyCenter.getName());
        
        ParamedicDetail paramedicDetail = new ParamedicDetail(savedMember, safetyCenter);
        ParamedicDetail savedParamedicDetail = paramedicDetailRepository.save(paramedicDetail);

        assertNotNull(savedParamedicDetail.getId());
        assertEquals(savedMember, savedParamedicDetail.getMember());
        assertEquals(safetyCenter, savedParamedicDetail.getSafetyCenter());
    }
}