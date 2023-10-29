package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.persistence.HospitalDetailRepository;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.ParamedicDetailRepository;
import com.codesmith.goojangmember.member.persistence.SafetyCenterRepository;
import com.codesmith.goojangmember.member.persistence.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final HospitalDetailRepository hospitalDetailRepository;
    private final ParamedicDetailRepository paramedicDetailRepository;
    private final SafetyCenterRepository safetyCenterRepository;
    private final MemberValidator memberValidator;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Member getMemberInfo(Long memberId) {

        return null;
    }

    @Override
    public List<String> getHospitalList(Double latitude, Double longitude, Double distance) {
        List<String> hospitalList = hospitalDetailRepository.findHospitalWithinDistance(latitude, longitude, distance);
        return hospitalList;
    }

    @Override
    public HospitalDetail join(HospitalJoinRequest hospitalJoinRequest) {
        Member member = covertToMember(hospitalJoinRequest);
        member = memberRepository.save(member);

        HospitalDetail hospitalDetail = covertToHospitalDetail(hospitalJoinRequest, member);
        return hospitalDetailRepository.save(hospitalDetail);
    }

    @Override
    public ParamedicDetail join(ParamedicJoinRequest paramedicJoinRequest) {
        Member member = covertToMember(paramedicJoinRequest);
        member = memberRepository.save(member);

        memberValidator.validateSafetyCenterId(paramedicJoinRequest.getCenterId());
        SafetyCenter safetyCenter = safetyCenterRepository.findById(paramedicJoinRequest.getCenterId()).get();

        ParamedicDetail paramedicDetail = new ParamedicDetail(member, safetyCenter);
        return paramedicDetailRepository.save(paramedicDetail);
    }

    private Member covertToMember(HospitalJoinRequest hospitalJoinRequest) {
        String email = hospitalJoinRequest.getEmail();
        String password = passwordEncoder.encode(hospitalJoinRequest.getPassword());
        String name = hospitalJoinRequest.getName();
        String imageUrl = hospitalJoinRequest.getImageUrl();
        Role role = Role.valueOf(hospitalJoinRequest.getRole());

        return new Member(email, password, name, imageUrl, role);
    }

    private Member covertToMember(ParamedicJoinRequest paramedicJoinRequest) {
        String email = paramedicJoinRequest.getEmail();
        String password = passwordEncoder.encode(paramedicJoinRequest.getPassword());
        String name = paramedicJoinRequest.getName();
        String imageUrl = paramedicJoinRequest.getImageUrl();
        Role role = Role.valueOf(paramedicJoinRequest.getRole());

        return new Member(email, password, name, imageUrl, role);
    }

    private HospitalDetail covertToHospitalDetail(HospitalJoinRequest hospitalJoinRequest, Member member) {
        String id = hospitalJoinRequest.getHospitalId();
        String telephone1 = hospitalJoinRequest.getTelephone1();
        String telephone2 = hospitalJoinRequest.getTelephone2();
        String address = hospitalJoinRequest.getAddress();
        Double latitude = hospitalJoinRequest.getLatitude();
        Double longitude = hospitalJoinRequest.getLongitude();

        return new HospitalDetail(id, member, telephone1, telephone2, address, latitude, longitude);
    }
}
