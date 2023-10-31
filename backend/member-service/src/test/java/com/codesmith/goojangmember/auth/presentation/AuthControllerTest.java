package com.codesmith.goojangmember.auth.presentation;

import com.codesmith.goojangmember.auth.application.AuthService;
import com.codesmith.goojangmember.auth.dto.request.AuthLoginRequest;
import com.codesmith.goojangmember.auth.dto.request.PassportCreateRequest;
import com.codesmith.goojangmember.auth.dto.response.PassportCreateResponse;
import com.codesmith.goojangmember.global.passport.application.PassportProvider;
import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.presentation.MemberController;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static junit.framework.TestCase.assertEquals;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertNotNull;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AuthController.class)
@MockBean(JpaMetamodelMappingContext.class)
class AuthControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;
    @MockBean
    AuthService authService;
    @MockBean
    PassportProvider passportProvider;

    @DisplayName("로그인 요청한다")
    @Test
    void 로그인_요청한다() throws Exception {
        AuthLoginRequest authLoginRequest = new AuthLoginRequest("hello@naver.com", "1234");

        String requestBody = objectMapper.writeValueAsString(authLoginRequest);

        mockMvc.perform(post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody)
                )
                .andExpect(status().isOk());
    }

    @DisplayName("패스포트를 요청한다")
    @Test
    void 패스포트를_요청한다() throws Exception {
        PassportCreateRequest request = new PassportCreateRequest("accessToken");
        String passport = "passport";

        given(authService.createPassport(request)).willReturn(new PassportCreateResponse(passport));

        String requestBody = objectMapper.writeValueAsString(request);

        mockMvc.perform(post("/auth/passport")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody)
                )
                .andExpect(status().isOk())
                .andReturn();
    }

}