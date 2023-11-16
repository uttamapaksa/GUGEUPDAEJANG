package com.codesmith.goojangcalling.member.application;

import com.codesmith.goojangcalling.member.persistence.domain.Member;

public interface MemberService {
    Member getMember(Long memberId);

    void saveMember(Long memberId);

    void saveMember(Member member);
}
