package com.codesmith.goojangmember.auth.application;

import com.codesmith.goojangmember.auth.dto.request.AuthLoginRequest;
import com.codesmith.goojangmember.auth.dto.response.AuthLoginResponse;
import com.codesmith.goojangmember.auth.persistence.RefreshTokenRepository;
import com.codesmith.goojangmember.member.application.MemberValidator;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.Role;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {
    @Mock
    private TokenProvider tokenProvider;
    @Mock
    private MemberRepository memberRepository;
    @Mock
    private RefreshTokenRepository refreshTokenRepository;
    @Mock
    private MemberValidator memberValidator;
    @Mock
    private PasswordEncoder passwordEncoder;
    @InjectMocks
    private AuthService authService;

    @Test
    @DisplayName("로그인 정보를 검증한다")
    void 로그인_정보를_검증한다() {
        AuthLoginRequest request = new AuthLoginRequest("hello@naver.com", "1234");
        String encodedPassword = passwordEncoder.encode(request.getPassword());

        given(memberRepository.findByEmail("hello@naver.com")).willReturn(new Member(1L, request.getEmail(), encodedPassword, "nameHello", "imagePath", Role.PARAMEDIC));
        given(passwordEncoder.matches(request.getPassword(), encodedPassword)).willReturn(true);
        given(tokenProvider.generateAccessToken("hello@naver.com")).willReturn("newAccessToken");
        given(tokenProvider.generateRefreshToken("hello@naver.com")).willReturn("newRefreshToken");

        AuthLoginResponse response = authService.login(request);

        assertThat(response.getAccessToken()).isEqualTo("newAccessToken");
        assertThat(response.getRefreshToken()).isEqualTo("newRefreshToken");
    }
}