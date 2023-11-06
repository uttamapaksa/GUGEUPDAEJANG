package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.auth.dto.request.AuthLoginRequest;
import com.codesmith.goojangmember.auth.dto.response.AuthLoginResponse;
import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.dto.response.BedCountResponse;
import com.codesmith.goojangmember.member.dto.response.CenterListResponse;
import com.codesmith.goojangmember.member.dto.response.EmailCheckResponse;
import com.codesmith.goojangmember.member.dto.response.HospitalListResponse;
import com.codesmith.goojangmember.member.dto.response.MemberInfoResponse;
import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.ParamedicDetail;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.List;

public interface MemberService {
    MemberInfoResponse getMemberInfo(Long memberId);
    List<HospitalListResponse> getHospitalList(Double latitude, Double longitude, Double distance);
    HospitalDetail join(HospitalJoinRequest hospitalJoinRequest);
    ParamedicDetail join(ParamedicJoinRequest paramedicJoinRequest);
    EmailCheckResponse checkEmail(String email);
    List<CenterListResponse> getSafetyCenterList(String keyword);
    BedCountResponse getBedCount(Long memberId);
}
