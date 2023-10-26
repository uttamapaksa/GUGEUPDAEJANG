package com.codesmith.goojangcalling.calling.application;


import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;
import com.codesmith.goojangcalling.calling.persistence.MemberTagRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
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

    @DisplayName("사용자 태그를 조회한다.")
    @Test
    public void 사용자_태그를_조회한다() throws Exception {
        List<Tag> mamebeTagList = new ArrayList<>();
        mamebeTagList.add(new Tag("추락"));
        mamebeTagList.add(new Tag("과다출혈"));
        given(memberTagRepository.findByMemberId(memberId))
                .willReturn(mamebeTagList);

        List<MemberTagResponse> memberTagList = memberTagService.getMemberTagList(memberId);

        Assertions.assertThat(memberTagList.get(0).getTag().getName()).isEqualTo("추락");
    }
}