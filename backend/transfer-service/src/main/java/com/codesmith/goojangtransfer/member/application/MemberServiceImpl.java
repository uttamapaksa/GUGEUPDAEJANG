package com.codesmith.goojangtransfer.member.application;

import com.codesmith.goojangtransfer.infra.openfeign.MemberServiceClient;
import com.codesmith.goojangtransfer.member.dto.response.MemberInfoResponse;
import com.codesmith.goojangtransfer.member.persistence.MemberRepository;
import com.codesmith.goojangtransfer.member.persistence.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final MemberServiceClient memberServiceClient;

    @Override
    public Member getMember(Long memberId) {
        if (!memberRepository.existsById(memberId)) {
            saveMember(memberId);
        }

        return memberRepository.findById(memberId).get();
    }

    @Override
    public void saveMember(Long memberId) {
        if (memberRepository.existsById(memberId)) return;
        Member member = requestMember(memberId);
        saveMember(member);
    }

    @Override
    public void saveMember(Member member) {
        memberRepository.save(member);
    }

    private Member requestMember(Long memberId) {
        MemberInfoResponse info = memberServiceClient.getMember(memberId);
        return new Member(info.getId(), info.getEmail(), info.getName(), info.getImageUrl());
    }
}
