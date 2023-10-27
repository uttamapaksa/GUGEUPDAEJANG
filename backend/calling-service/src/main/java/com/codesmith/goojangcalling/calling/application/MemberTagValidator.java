package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.exception.DuplicateMemberTagException;
import com.codesmith.goojangcalling.calling.persistence.MemberTagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberTagValidator {
    private final MemberTagRepository memberTagRepository;

    public void validateMemberTag(Long memberId, Tag tag) {
        memberTagRepository.findByMemberIdAndTag(memberId, tag).ifPresent(memberTag -> {
            throw new DuplicateMemberTagException("이미 생성된 사용자 태그입니다.");
        });
    }
}