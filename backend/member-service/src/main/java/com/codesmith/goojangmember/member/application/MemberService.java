package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.HospitalListRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.dto.response.*;
import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import com.codesmith.goojangmember.member.persistence.domain.ParamedicDetail;

import java.util.List;

public interface MemberService {
    MemberInfoResponse getMemberInfo(Long memberId);
    List<HospitalListResponse> getHospitalList(HospitalListRequest hospitalListRequest);
    HospitalDetail join(HospitalJoinRequest hospitalJoinRequest);
    ParamedicDetail join(ParamedicJoinRequest paramedicJoinRequest);
    EmailCheckResponse checkEmail(String email);
    List<CenterListResponse> getSafetyCenterList(String keyword);
    BedCountResponse getBedCount(Long memberId);

    HospitalInfoResponse getHospitalInfo(Long memberId);
    MySafetyCenterInfoResponse getMySafetyCenterInfo(Long memberId);
}
