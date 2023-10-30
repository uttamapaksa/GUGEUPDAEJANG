package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.auth.dto.request.AuthLoginRequest;
import com.codesmith.goojangmember.auth.dto.response.AuthLoginResponse;
import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.ParamedicDetail;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.List;

public interface MemberService {
    Member getMemberInfo(Long memberId);
    List<String> getHospitalList(Double latitude, Double longitude, Double distance);
    HospitalDetail join(HospitalJoinRequest hospitalJoinRequest);
    ParamedicDetail join(ParamedicJoinRequest paramedicJoinRequest);
}
