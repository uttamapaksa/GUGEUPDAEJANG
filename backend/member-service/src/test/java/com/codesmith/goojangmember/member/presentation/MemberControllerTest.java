package com.codesmith.goojangmember.member.presentation;

import com.codesmith.goojangmember.member.application.MemberService;
import com.codesmith.goojangmember.member.application.MemberServiceImpl;
import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;


import static org.mockito.Mockito.mock;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
class MemberControllerTest {
    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    private MockMvc mockMvc;

    private Long id = 1L;
    private String email = "test@test.com";
    private String name = "test";

    @DisplayName("병원 회원가입 요청을 한다")
    @Test
    void 병원_회원가입_요청을_한다() throws Exception {
        HospitalJoinRequest hospitalJoinRequest = new HospitalJoinRequest("A11111", "example@example.com", "password123", "Hospital Name", "profile.jpg", "HOSPITAL", "123-456-789", "987-654-321", "123 Main St, City, Country", 40.7128, -74.0060);

        String requestBody = objectMapper.writeValueAsString(hospitalJoinRequest);

        mockMvc.perform(post("/member/join/hospital")
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

        mockMvc.perform(post("/member/join/paramedic")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody)
                )
                .andExpect(status().isOk());
    }

}
