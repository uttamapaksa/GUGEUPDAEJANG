package com.codesmith.goojangmember.member.application;

import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

class MemberServiceTest {
    private MemberRepository memberRepository = mock(MemberRepository.class);
    private MemberService memberService = new MemberServiceImpl(memberRepository);

    private Long id = 1L;
    private String email = "test@test.com";
    private String name = "test";

    @Test
    void 성공() {
        given(memberRepository.findById(id))
                .willReturn(Optional.of(new Member()));

        Member member = memberRepository.getById(id);

        assertThat(member.getId()).isEqualTo(id);
        assertThat(member.getEmail()).isEqualTo(email);
        assertThat(member.getName()).isEqualTo(name);
    }

    @Test
    void 실패() {
        given(memberRepository.findById(0L)).willReturn(Optional.empty());

        assertThatThrownBy(() ->
                memberRepository.getById(0L))
                .isInstanceOf(MemberNotFoundException.class);
    }

}