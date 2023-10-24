package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.member.persistence.domain.Member;
import org.springframework.web.servlet.function.EntityResponse;

public interface MemberService {
    Member getMemberInfo(Long memberId);
}
