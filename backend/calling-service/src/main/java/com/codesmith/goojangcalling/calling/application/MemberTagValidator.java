package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.exception.DuplicateMemberTagException;
import com.codesmith.goojangcalling.calling.exception.MemberTagNotFoundException;
import com.codesmith.goojangcalling.calling.exception.TagNotFoundException;
import com.codesmith.goojangcalling.calling.persistence.MemberTagRepository;
import com.codesmith.goojangcalling.calling.persistence.TagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberTagValidator {
    private final MemberTagRepository memberTagRepository;
    private final TagRepository tagRepository;

    public void validateMemberTag(Long memberId, Tag tag) {
        memberTagRepository.findByMemberIdAndTag(memberId, tag).ifPresent(memberTag -> {
            throw new DuplicateMemberTagException("이미 생성된 사용자 태그입니다.");
        });
    }

    public void validateTag(Long tagId) {
        if(!tagRepository.existsById(tagId)) {
            throw new TagNotFoundException("존재하지 않는 태그입니다.");
        }
    }

    public void validateExistMemberTag(Long memberId, Tag tag) {
        if (!memberTagRepository.existsByMemberIdAndTag(memberId, tag)) {
            throw new MemberTagNotFoundException("존재하지 않는 사용자 태그입니다.");
        }
    }
}