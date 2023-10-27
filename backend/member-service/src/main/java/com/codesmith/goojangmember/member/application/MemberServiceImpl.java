package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.member.persistence.HospitalDetailRepository;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final HospitalDetailRepository hospitalDetailRepository;

    @Override
    public Member getMemberInfo(Long memberId) {
        return null;
    }

    @Override
    public List<String> getHospitalList(Double latitude, Double longitude, Double distance) {
        List<String> hospitalList = hospitalDetailRepository.findHospitalWithinDistance(latitude, longitude, distance);
        return hospitalList;
    }
}
