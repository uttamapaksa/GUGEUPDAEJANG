package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;
import com.codesmith.goojangcalling.calling.persistence.MemberTagRepository;
import com.codesmith.goojangcalling.calling.persistence.TagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.MemberTag;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MemberTagServiceImpl implements MemberTagService {

    private final MemberTagRepository memberTagRepository;
    private final TagRepository tagRepository;

    private final MemberTagValidator memberTagValidator;

    @Override
    public List<MemberTagResponse> getMemberTagList(Long memberId) {
        return memberTagRepository.findByMemberId(memberId)
                .stream()
                .map(o -> new MemberTagResponse(o))
                .collect(Collectors.toList());
    }

    @Override
    public MemberTagResponse addMemberTag(Long memberId, String tagName) {
        if (tagRepository.existsByName(tagName)) {
            Tag tag = tagRepository.findByName(tagName).get();
            memberTagValidator.validateMemberTag(memberId, tag);
            memberTagRepository.save(new MemberTag(memberId, tag));
            return new MemberTagResponse(tag);
        }
        Tag createTag = new Tag(tagName);
        tagRepository.save(createTag);
        memberTagRepository.save(new MemberTag(memberId, createTag));
        return new MemberTagResponse(createTag);
    }

    @Transactional
    @Override
    public void deleteMemberTag(Long memberId, Long tagId) {
        memberTagValidator.validateTag(tagId);
        Tag tag = tagRepository.findById(tagId).get();
        memberTagValidator.validateExistMemberTag(memberId, tag);
        memberTagRepository.deleteByMemberIdAndTag(memberId, tag);
    }
}