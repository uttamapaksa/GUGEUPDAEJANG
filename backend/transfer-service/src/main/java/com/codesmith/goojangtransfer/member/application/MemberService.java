package com.codesmith.goojangtransfer.member.application;

import com.codesmith.goojangtransfer.member.persistence.domain.Member;

public interface MemberService {
    Member getMember(Long memberId);
    void saveMember(Long memberId);
    void saveMember(Member member);
}
