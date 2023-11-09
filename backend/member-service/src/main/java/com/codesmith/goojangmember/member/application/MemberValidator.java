package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.auth.exception.InvalidTokenException;
import com.codesmith.goojangmember.auth.persistence.RefreshTokenRepository;
import com.codesmith.goojangmember.member.exception.*;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.SafetyCenterRepository;
import com.codesmith.goojangmember.member.persistence.domain.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
@RequiredArgsConstructor
public class MemberValidator {
    private final MemberRepository memberRepository;
    private final SafetyCenterRepository safetyCenterRepository;
    private final RefreshTokenRepository refreshTokenRepository;

    public void validateMemberId(Long memberId) {
        if (!memberRepository.existsById(memberId)) {
            throw new MemberNotFoundException("없는 사용자 ID");
        }
    }

    public void validateSafetyCenterId(Long safetyCenterId) {
        if (!safetyCenterRepository.existsById(safetyCenterId)) {
            throw new SafetyCenterNotFoundException("없는 안전센터 ID");
        }
    }

    public void doesEmailExist(String email) {
        if (!memberRepository.existsByEmail(email)) {
            throw new SafetyCenterNotFoundException("없는 이메일");
        }
    }

    public void existsByRefreshToken(String refreshToken) {
        if (refreshTokenRepository.existsByRefreshToken(refreshToken)) {
            System.out.println(refreshToken);
            throw new InvalidTokenException("없는 리프레시 토큰");
        }
    }

    public void validateBedCount(HashMap<String, Long> hospitalInfoMap, String hospitalId) {
        if (!hospitalInfoMap.containsKey(hospitalId) || hospitalInfoMap.get(hospitalId) <= 0) {
            throw new NoAvailableBedsException("응급실 가용 병상이 없음");
        }
    }

    public void validateHospitalRole(Long memberId) {
        if (memberRepository.findById(memberId).get().getRole() != Role.HOSPITAL) {
            throw new NotHospitalMemberException("병원 사용자가 아님");
        }
    }

    public void validateParamedicRole(Long memberId) {
        if (memberRepository.findById(memberId).get().getRole() != Role.PARAMEDIC) {
            throw new NotParamedicMemberException("구급대원 사용자가 아님");
        }
    }
}
