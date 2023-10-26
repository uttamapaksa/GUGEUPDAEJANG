package com.codesmith.goojangmember.member.presentation;

import com.codesmith.goojangmember.member.application.MemberService;
import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(MemberController.class)
class MemberControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MemberService memberService;

    private Long id = 1L;
    private String email = "test@test.com";
    private String name = "test";

    @Test
    void 성공() throws Exception {
        given(memberService.getMemberInfo(id))
                .willReturn(new Member());

        ResultActions perform = mockMvc.perform(get("/members/" + id));

        perform
                .andExpect(status().isOk())
                .andExpect(jsonPath("id").value(id))
                .andExpect(jsonPath("email").value(email))
                .andExpect(jsonPath("name").value(name));
    }

    @Test
    void 실패() throws Exception {
        given(memberService.getMemberInfo(1000L))
                .willThrow(new MemberNotFoundException("no member id: " + 1000));

        ResultActions perform = mockMvc.perform(get("/members/" + 1000));

        perform
                .andExpect(status().isNotFound());
    }

    @DisplayName("병원 회원가입 요청을 한다")
    @Test
    void 병원_회원가입_요청을_한다() throws Exception {
        HospitalJoinRequest hospitalJoinRequest = new HospitalJoinRequest("example@example.com", "password123", "Hospital Name", "profile.jpg", "HOSPITAL", "123-456-789", "987-654-321", "123 Main St, City, Country", 40.7128, -74.0060);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = objectMapper.writeValueAsString(hospitalJoinRequest);

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/member/join/hospital")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody)
                )
                .andExpect(status().isOk());
    }

    @DisplayName("구급대원 회원가입 요청을 한다")
    @Test
    void 구급대원_회원가입_요청을_한다() throws Exception {
        ParamedicJoinRequest paramedicJoinRequest = new ParamedicJoinRequest("paramedic@example.com", "password123", "Paramedic Name", "paramedic.jpg", "PARAMEDIC", 1L);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = objectMapper.writeValueAsString(paramedicJoinRequest);

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/member/join/paramedic")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody)
                )
                .andExpect(status().isOk());
    }

}
