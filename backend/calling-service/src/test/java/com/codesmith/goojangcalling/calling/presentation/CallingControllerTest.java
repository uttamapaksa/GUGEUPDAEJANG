package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.application.MemberTagService;
import com.codesmith.goojangcalling.calling.dto.request.AddMemberTagRequest;
import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import com.codesmith.goojangcalling.infra.aws.S3Client;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
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

    @Autowired
    private ObjectMapper objectMapper;
    
    private final Long memberId = 521L;

    @DisplayName("사용자 태그를 조회한다.")
    @Test
    public void 사용자_태그를_조회한다() throws Exception {
        List<MemberTagResponse> memberTagResponseList = new ArrayList<>();
        memberTagResponseList.add(new MemberTagResponse(new Tag("추락")));
        memberTagResponseList.add(new MemberTagResponse(new Tag("과다출혈")));
        given(memberTagService.getMemberTagList(memberId))
                .willReturn(memberTagResponseList);

        String expectedJson = objectMapper.writeValueAsString(memberTagResponseList);

        ResultActions perform = mockMvc.perform(get("/calling/tag"));

        perform
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJson));
    }

    @DisplayName("사용자 태그를 생성한다.")
    @Test
    void 사용자_태그를_생성한다() throws Exception {
        String inputTagName = "교통사고";
        Tag tag = new Tag(inputTagName);
        AddMemberTagRequest addMemberTagRequest = new AddMemberTagRequest(inputTagName);
        MemberTagResponse memberTagResponse = new MemberTagResponse(tag);
        given(memberTagService.addMemberTag(memberId, inputTagName)).willReturn(memberTagResponse);

        String requestBody = objectMapper.writeValueAsString(addMemberTagRequest);
        String expectedJson = objectMapper.writeValueAsString(memberTagResponse);
        ResultActions perform = mockMvc.perform(post("/calling/tag")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody));

        perform
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJson));
    }

    @DisplayName("사용자 태그를 삭제한다.")
    @Test
    void 사용자_태그를_삭제한다() throws Exception {
        Long expectedTagId = 2L;

        mockMvc.perform(delete("/calling/tag/" + expectedTagId))
                .andExpect(status().isOk());
    }
}