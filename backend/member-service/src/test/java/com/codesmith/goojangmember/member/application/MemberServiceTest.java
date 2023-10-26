package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.persistence.HospitalDetailRepository;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

@ExtendWith(MockitoExtension.class)
public class MemberServiceTest {
    @Mock
    private MemberRepository memberRepository;
    @Mock
    private HospitalDetailRepository hospitalDetailRepository;
    @InjectMocks
    private MemberServiceImpl memberService;

    private Long id = 1L;
    private String email = "test@test.com";
    private String name = "test";
    private Double latitude = 37.5938765502235;
    private Double longitude = 127.05183223390303;
    private Double distance = 2.0;

    @Test
    void 성공() {
        given(memberRepository.findById(id))
                .willReturn(Optional.of(new Member()));

        Member member = memberRepository.getById(id);

        assertThat(member.getId()).isEqualTo(id);
        assertThat(member.getEmail()).isEqualTo(email);
        assertThat(member.getName()).isEqualTo(name);
    }

    @Test
    void 실패() {
        given(memberRepository.findById(0L)).willReturn(Optional.empty());

        assertThatThrownBy(() ->
                memberRepository.getById(0L))
                .isInstanceOf(MemberNotFoundException.class);
    }

    @Test
    void 병상이_있는_병원들을_소요시간이_짧은_순으로_반환한다() {
        // 가정: 병원 목록은 테스트용으로 설정합니다.
        List<String> hospitalList = List.of("병원1", "병원2", "병원3");

        // 가용병상 조회 API의 반환값 설정
        given(OpennApiService.getAvailableBeds(hospitalList))
            .willReturn(Map.of("병원1", 10, "병원2", 5, "병원3", 8));

        // Tmap API의 반환값 설정 (소요 시간)
        given(tmapService.getTravelTime("현재위치", "병원1"))
            .willReturn(30); // 예시로 30분 소요
        given(tmapService.getTravelTime("현재위치", "병원2"))
            .willReturn(20); // 예시로 20분 소요
        given(tmapService.getTravelTime("현재위치", "병원3"))
            .willReturn(40); // 예시로 40분 소요

        // MemberService의 getHospitalListSortedByTravelTime 메소드 호출
        List<Hospital> sortedHospitalList = memberService.getHospitalListSortedByTravelTime("현재위치", hospitalList);

        // 예상되는 결과: 병원2 (20분 소요) -> 병원1 (30분 소요) -> 병원3 (40분 소요)
        Assertions.assertEquals(3, sortedHospitalList.size());
        Assertions.assertEquals("병원2", sortedHospitalList.get(0).getName());
        Assertions.assertEquals("병원1", sortedHospitalList.get(1).getName());
        Assertions.assertEquals("병원3", sortedHospitalList.get(2).getName());
    }
}