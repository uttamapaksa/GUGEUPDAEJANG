package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.ParamedicDetail;
import org.springframework.web.servlet.function.EntityResponse;

public interface MemberService {
    Member getMemberInfo(Long memberId);
    HospitalDetail join(HospitalJoinRequest hospitalJoinRequest);

    ParamedicDetail join(ParamedicJoinRequest paramedicJoinRequest);
}
