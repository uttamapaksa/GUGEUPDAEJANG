package com.codesmith.goojangmember.member.presentation;

import com.codesmith.goojangmember.member.application.MemberService;
import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
}
