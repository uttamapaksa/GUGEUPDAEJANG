package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.persistence.HospitalDetailRepository;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.ParamedicDetailRepository;
import com.codesmith.goojangmember.member.persistence.SafetyCenterRepository;
import com.codesmith.goojangmember.member.persistence.domain.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.registerCustomDateFormat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
class MemberServiceTest {
    private MemberRepository memberRepository = mock(MemberRepository.class);
    private HospitalDetailRepository hospitalDetailRepository = mock(HospitalDetailRepository.class);
    private ParamedicDetailRepository paramedicDetailRepository = mock(ParamedicDetailRepository.class);
    private SafetyCenterRepository safetyCenterRepository = mock(SafetyCenterRepository.class);
//    private MemberService memberService = new MemberServiceImpl(memberRepository);
    private MemberValidator memberValidator = new MemberValidator(memberRepository, safetyCenterRepository);
    private MemberService memberService = new MemberServiceImpl(memberRepository, hospitalDetailRepository, paramedicDetailRepository, safetyCenterRepository, memberValidator);

    private Long id = 1L;
    private String email = "test@test.com";
    private String name = "test";
    private Double latitude = 37.5938765502235;
    private Double longitude = 127.05183223390303;
    private Double distance = 2.0;

    @DisplayName("사용자 정보를 조회한다")
    @Test
    void 사용자_정보를_조회한다() {
        given(memberRepository.findById(id))
                .willReturn(Optional.of(new Member(1L, "test@test.com", "password123", "test", "profile.jpg", Role.PARAMEDIC)));

        Member member = memberRepository.findById(id).get();

        assertThat(member.getId()).isEqualTo(id);
        assertThat(member.getEmail()).isEqualTo(email);
        assertThat(member.getName()).isEqualTo(name);
    }

    @Test
    @DisplayName("병원 사용자를 추가한다")
    void 병원_사용자를_추가한다() {
        HospitalJoinRequest hospitalJoinResponse = new HospitalJoinRequest("A11111", "example@example.com", "password123", "Hospital Name", "profile.jpg", "HOSPITAL", "123-456-789", "987-654-321", "123 Main St, City, Country", 40.7128, -74.0060);

        given(memberRepository.save(Mockito.any(Member.class))).willReturn(new Member(1L, hospitalJoinResponse.getEmail(), hospitalJoinResponse.getPassword(), hospitalJoinResponse.getName(), hospitalJoinResponse.getImageUrl(), Role.HOSPITAL));
        given(hospitalDetailRepository.save(Mockito.any(HospitalDetail.class))).willReturn(new HospitalDetail("A1111111", null, hospitalJoinResponse.getTelephone1(), hospitalJoinResponse.getTelephone2(), hospitalJoinResponse.getAddress(), hospitalJoinResponse.getLatitude(), hospitalJoinResponse.getLongitude()));

        HospitalDetail savedHospitalDetail = memberService.join(hospitalJoinResponse);

        verify(memberRepository, times(1)).save(Mockito.any(Member.class));
        verify(hospitalDetailRepository, times(1)).save(Mockito.any(HospitalDetail.class));

        assertThat(savedHospitalDetail.getId()).isEqualTo("A1111111");
        assertThat(savedHospitalDetail.getTelephone1()).isEqualTo(hospitalJoinResponse.getTelephone1());
        assertThat(savedHospitalDetail.getTelephone2()).isEqualTo(hospitalJoinResponse.getTelephone2());
        assertThat(savedHospitalDetail.getAddress()).isEqualTo(hospitalJoinResponse.getAddress());
    }

    @Test
    @DisplayName("구급대원 사용자를 추가한다")
    void 구급대원_사용자를_추가한다() {
        ParamedicJoinRequest paramedicJoinRequest = new ParamedicJoinRequest("paramedic@example.com", "password123", "Paramedic Name", "paramedic.jpg", "PARAMEDIC", 1L);
        Member member = new Member(paramedicJoinRequest.getEmail(), paramedicJoinRequest.getPassword(), paramedicJoinRequest.getName(), paramedicJoinRequest.getImageUrl(), Role.PARAMEDIC);
        SafetyCenter safetyCenter = new SafetyCenter(1L, "서울", "Safety Center Name", "123 Center St, City, Country", "123-456-789", "987-654-321");

        given(memberRepository.save(Mockito.any(Member.class))).willReturn(new Member(1L, paramedicJoinRequest.getEmail(), paramedicJoinRequest.getPassword(), paramedicJoinRequest.getName(), paramedicJoinRequest.getImageUrl(), Role.PARAMEDIC));
        given(safetyCenterRepository.findById(paramedicJoinRequest.getCenterId())).willReturn(Optional.of(safetyCenter));
        given(safetyCenterRepository.existsById(paramedicJoinRequest.getCenterId())).willReturn(true);
        given(paramedicDetailRepository.save(Mockito.any(ParamedicDetail.class))).willReturn(new ParamedicDetail(1L, member, safetyCenter));

        ParamedicDetail savedParamedicDetail = memberService.join(paramedicJoinRequest);

        verify(memberRepository, times(1)).save(Mockito.any(Member.class));
        verify(paramedicDetailRepository, times(1)).save(Mockito.any(ParamedicDetail.class));

        assertThat(savedParamedicDetail.getId()).isEqualTo(1L);
        assertThat(savedParamedicDetail.getSafetyCenter().getId()).isEqualTo(paramedicJoinRequest.getCenterId());
    }

//    @Test
//    void 병상이_있는_병원들을_소요시간이_짧은_순으로_반환한다() {
//        // 가정: 병원 목록은 테스트용으로 설정합니다.
//        List<String> hospitalList = List.of("병원1", "병원2", "병원3");
//
//        // 가용병상 조회 API의 반환값 설정
//        given(OpennApiService.getAvailableBeds(hospitalList))
//            .willReturn(Map.of("병원1", 10, "병원2", 5, "병원3", 8));
//
//        // Tmap API의 반환값 설정 (소요 시간)
//        given(tmapService.getTravelTime("현재위치", "병원1"))
//            .willReturn(30); // 예시로 30분 소요
//        given(tmapService.getTravelTime("현재위치", "병원2"))
//            .willReturn(20); // 예시로 20분 소요
//        given(tmapService.getTravelTime("현재위치", "병원3"))
//            .willReturn(40); // 예시로 40분 소요
//
//        // MemberService의 getHospitalListSortedByTravelTime 메소드 호출
//        List<Hospital> sortedHospitalList = memberService.getHospitalListSortedByTravelTime("현재위치", hospitalList);
//
//        // 예상되는 결과: 병원2 (20분 소요) -> 병원1 (30분 소요) -> 병원3 (40분 소요)
//        Assertions.assertEquals(3, sortedHospitalList.size());
//        Assertions.assertEquals("병원2", sortedHospitalList.get(0).getName());
//        Assertions.assertEquals("병원1", sortedHospitalList.get(1).getName());
//        Assertions.assertEquals("병원3", sortedHospitalList.get(2).getName());
//    }
}