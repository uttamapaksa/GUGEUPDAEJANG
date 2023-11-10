package com.codesmith.goojangtransfer.member.application;

import com.codesmith.goojangtransfer.member.persistence.MemberRepository;
import com.codesmith.goojangtransfer.member.persistence.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;

    @Override
    public Member getMember(Long memberId) {
        return null;
    }

    @Override
    public void saveMember(Long memberId) {
        memberRepository.save(new Member(0L, "test@gmail.com", "testnmae", "image.jpg", "HOSPITAL"));
    }

    @Override
    public void saveMember(Member member) {

    }
}
