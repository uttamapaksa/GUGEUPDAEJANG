package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.Role;
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

    @DisplayName("회원이 성공적으로 추가된다")
    @Test
    void 회원이_성공적으로_추가된다() {
        Member newMember = Member.builder()
                .email("example@email.com")
                .password("password")
                .name("John Doe")
                .imageUrl("example.jpg")
                .role(Role.HOSPITAL)
                .build();

        Member savedMember = memberRepository.save(newMember);

        assertNotNull(savedMember.getId());
        assertThat(savedMember.getEmail()).isEqualTo(newMember.getEmail());
        assertThat(savedMember.getName()).isEqualTo(newMember.getName());
    }

    @DisplayName("병원 회원이 성공적으로 추가된다")
    @Test
    void 병원_회원이_성공적으로_추가된다() {
        Member newMember = Member.builder()
                .email("example@email.com")
                .password("password")
                .name("John Doe")
                .imageUrl("example.jpg")
                .role(Role.HOSPITAL)
                .build();

        Member savedMember = memberRepository.save(newMember);

        assertNotNull(savedMember.getId());
        assertThat(savedMember.getEmail()).isEqualTo(newMember.getEmail());
        assertThat(savedMember.getName()).isEqualTo(newMember.getName());

        // 병원 정보 추가
        HospitalDetail hospitalDetail = HospitalDetail.builder()
                .member(savedMember)  // 해당 병원 회원과 연결
                .telephone1("123-456-7890")
                .telephone2("987-654-3210")
                .address("123 Main St, City")
                .latitude(123.456)
                .longitude(789.012)
                .build();

        HospitalDetail savedHospitalDetail = hospitalDetailRepository.save(hospitalDetail);

        assertNotNull(savedHospitalDetail.getId());
        assertThat(savedHospitalDetail.getTelephone1()).isEqualTo(hospitalDetail.getTelephone1());
        assertThat(savedHospitalDetail.getTelephone2()).isEqualTo(hospitalDetail.getTelephone2());
        assertThat(savedHospitalDetail.getAddress()).isEqualTo(hospitalDetail.getAddress());
        assertEquals(savedMember, savedHospitalDetail.getMember());  // 회원과 병원 정보 연결 확인
    }

    @DisplayName("구급대원 회원이 성공적으로 추가된다")
    @Test
    void 구급대원_회원이_성공적으로_추가된다() {
        Member newMember = Member.builder()
                .email("example@email.com")
                .password("password")
                .name("John Doe")
                .imageUrl("example.jpg")
                .role(Role.PARAMEDIC)
                .build();

        Member savedMember = memberRepository.save(newMember);

        assertNotNull(savedMember.getId());
        assertThat(savedMember.getEmail()).isEqualTo(newMember.getEmail());
        assertThat(savedMember.getName()).isEqualTo(newMember.getName());
    }
}