package com.codesmith.goojangcalling.calling.application;


import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;
import com.codesmith.goojangcalling.calling.persistence.MemberTagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class MemberTagServiceTest {

    @Mock
    private MemberTagRepository memberTagRepository;

    @InjectMocks
    MemberTagServiceImpl memberTagService;

    private Long memberId = 521L;

    @Test
    public void 태그조회_사용자아이디() throws Exception {
        // given
        List<Tag> mamebeTagList = new ArrayList<>();
        mamebeTagList.add(new Tag("추락"));
        mamebeTagList.add(new Tag("과다출혈"));
        given(memberTagRepository.findByMemberId(memberId))
                .willReturn(mamebeTagList);

        // when
        List<MemberTagResponse> memberTagList = memberTagService.getMemberTagList(memberId);

        // then
        Assertions.assertThat(memberTagList.get(0).getTag().getName()).isEqualTo("추락");
    }
}