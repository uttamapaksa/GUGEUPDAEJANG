package com.codesmith.goojangcalling.calling.application;


import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;
import com.codesmith.goojangcalling.calling.persistence.MemberTagRepository;
import com.codesmith.goojangcalling.calling.persistence.TagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.MemberTag;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class MemberTagServiceTest {

    @Mock
    private MemberTagRepository memberTagRepository;

    @Mock
    private TagRepository tagRepository;

    @InjectMocks
    private MemberTagServiceImpl memberTagService;

    @Mock
    private MemberTagValidator memberTagValidator;

    private Long memberId = 521L;

    @DisplayName("사용자 태그를 조회한다.")
    @Test
    public void 사용자_태그를_조회한다() throws Exception {
        List<Tag> mamebeTagList = new ArrayList<>();
        mamebeTagList.add(new Tag("추락"));
        mamebeTagList.add(new Tag("과다출혈"));
        given(memberTagRepository.findByMemberId(memberId)).willReturn(mamebeTagList);

        List<MemberTagResponse> memberTagList = memberTagService.getMemberTagList(memberId);

        assertThat(memberTagList.get(0).getTag().getName()).isEqualTo("추락");
    }

    @DisplayName("추가할 태그가 존재하면 사용자태그에 추가한다.")
    @Test
    void 추가할_태그가_존재하면_사용자태그에_추가한다() throws Exception {
        String inputTagName = "교통사고";
        given(memberTagRepository.save(Mockito.any(MemberTag.class))).willReturn(new MemberTag(memberId, new Tag(inputTagName)));

        MemberTagResponse memberTagResponse = memberTagService.addMemberTag(memberId, inputTagName);

        verify(memberTagRepository).save(Mockito.any(MemberTag.class));

        assertThat(memberTagResponse.getTag().getName()).isEqualTo(inputTagName);
    }

    @DisplayName("추가할 태그가 존재하지 않으면 태그를 생성하고 사용자태그에 추가한다")
    @Test
    void 추가할_태그가_존재하지_않으면_태그를_생성하고_사용자태그에_추가한다() throws Exception {
        String inputTagName = "기절";
        Tag tag = new Tag(inputTagName);
        given(tagRepository.save(Mockito.any(Tag.class))).willReturn(new Tag(inputTagName));
        given(memberTagRepository.save(Mockito.any(MemberTag.class))).willReturn(new MemberTag(memberId, tag));

        MemberTagResponse memberTagResponse = memberTagService.addMemberTag(memberId, inputTagName);
        verify(tagRepository).save(Mockito.any(Tag.class));
        verify(memberTagRepository).save(Mockito.any(MemberTag.class));

        assertThat(memberTagResponse.getTag().getName()).isEqualTo(inputTagName);
    }
}