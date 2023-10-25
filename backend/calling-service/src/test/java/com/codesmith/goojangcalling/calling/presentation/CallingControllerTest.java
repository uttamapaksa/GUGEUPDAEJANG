package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.application.MemberTagService;
import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import com.codesmith.goojangcalling.infra.aws.S3Client;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CallingController.class)
class CallingControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    MemberTagService memberTagService;

    @MockBean
    S3Client s3Client;
    
    private final Long memberId = 521L;

    @Test
    public void 태그조회_멤버별() throws Exception {
        // given
        List<MemberTagResponse> memberTagResponseList = new ArrayList<>();
        memberTagResponseList.add(new MemberTagResponse(new Tag("추락")));
        memberTagResponseList.add(new MemberTagResponse(new Tag("과다출혈")));
        given(memberTagService.getMemberTagList(memberId))
                .willReturn(memberTagResponseList);

        ObjectMapper objectMapper = new ObjectMapper();
        String expectedJson = objectMapper.writeValueAsString(memberTagResponseList);
        // when
        ResultActions perform = mockMvc.perform(get("/calling/tag"));

        // then
        perform
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJson));
    }
}