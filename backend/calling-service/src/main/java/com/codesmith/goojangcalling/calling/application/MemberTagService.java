package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;

import java.util.List;

public interface MemberTagService {
    List<MemberTagResponse> getMemberTagList(Long memberId);

    MemberTagResponse addMemberTag(Long memberId, String tagName);

    void deleteMemberTag(Long memberId, Long tagId);
}