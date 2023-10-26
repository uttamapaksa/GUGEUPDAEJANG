package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.persistence.HospitalDetailRepository;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.ParamedicDetailRepository;
import com.codesmith.goojangmember.member.persistence.SafetyCenterRepository;
import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.ParamedicDetail;
import com.codesmith.goojangmember.member.persistence.domain.SafetyCenter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.function.EntityResponse;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final HospitalDetailRepository hospitalDetailRepository;
    private final ParamedicDetailRepository paramedicDetailRepository;
    private final SafetyCenterRepository safetyCenterRepository;
    private final MemberValidator memberValidator;

    @Override
    public Member getMemberInfo(Long memberId) {

        return null;
    }

    @Override
    public HospitalDetail join(HospitalJoinRequest hospitalJoinRequest) {
        return null;
    }

    @Override
    public ParamedicDetail join(ParamedicJoinRequest paramedicJoinRequest) {
        Member member = paramedicJoinRequest.toMember();
        member = memberRepository.save(member);

        memberValidator.validateSafetyCenterId(paramedicJoinRequest.getCenterId());
        SafetyCenter safetyCenter = safetyCenterRepository.findById(paramedicJoinRequest.getCenterId()).get();

        ParamedicDetail paramedicDetail = new ParamedicDetail(member, safetyCenter);
        return paramedicDetailRepository.save(paramedicDetail);
    }
}
