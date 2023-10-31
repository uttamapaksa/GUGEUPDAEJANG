package com.codesmith.goojangmember.member.presentation;

import com.codesmith.goojangmember.member.application.MemberService;
import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
class MemberControllerTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;
    @MockBean
    MemberService memberService;


    @DisplayName("병원 회원가입 요청을 한다")
    @Test
    void 병원_회원가입_요청을_한다() throws Exception {
        HospitalJoinRequest hospitalJoinRequest = new HospitalJoinRequest("A11111", "example@example.com", "password123", "Hospital Name", "profile.jpg", "HOSPITAL", "123-456-789", "987-654-321", "123 Main St, City, Country", 40.7128, -74.0060);

        String requestBody = objectMapper.writeValueAsString(hospitalJoinRequest);

        mockMvc.perform(post("/member/join/hospital")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody)
                )
                .andExpect(status().isOk())
                .andDo(document("user-register"));
    }

    @DisplayName("구급대원 회원가입 요청을 한다")
    @Test
    void 구급대원_회원가입_요청을_한다() throws Exception {
        ParamedicJoinRequest paramedicJoinRequest = new ParamedicJoinRequest("paramedic@example.com", "password123", "Paramedic Name", "paramedic.jpg", "PARAMEDIC", 1L);

        String requestBody = objectMapper.writeValueAsString(paramedicJoinRequest);

        mockMvc.perform(post("/member/join/paramedic")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody)
                )
                .andExpect(status().isOk());
    }

    @DisplayName("이송 요청을 보낼 수 있는 병원 목록을 조회한다")
    @Test
    void 이송_요청을_보낼_수_있는_병원_목록을_조회한다() throws Exception {
        mockMvc.perform(get("/member/hospital")
                        .param("latitude", "40.7128")
                        .param("longitude", "74.0060")
                        .param("distance", "10")
                )
                .andExpect(status().isOk());
    }
}
