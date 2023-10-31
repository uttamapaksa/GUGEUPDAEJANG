package com.codesmith.goojangmember.auth.application;

import com.codesmith.goojangmember.auth.dto.request.AuthLoginRequest;
import com.codesmith.goojangmember.auth.dto.request.PassportCreateRequest;
import com.codesmith.goojangmember.auth.dto.response.AuthLoginResponse;
import com.codesmith.goojangmember.auth.persistence.RefreshTokenRepository;
import com.codesmith.goojangmember.global.passport.application.PassportProvider;
import com.codesmith.goojangmember.global.passport.dto.MemberInfo;
import com.codesmith.goojangmember.global.passport.dto.Passport;
import com.codesmith.goojangmember.member.application.MemberValidator;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.Role;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willReturn;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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
    @Mock
    private PassportProvider passportProvider;
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

    @Test
    @DisplayName("토큰으로 패스포트를 발급한다")
    void 토큰으로_패스포트를_발급한다() {
        String accessToken = "dummy-access-token";
        String email = "dummy@example.com";
        Member member = new Member(1L, email, "passwor1234", "Dummy Name", "https://example.com/image.png", Role.PARAMEDIC);
        String passport = "dummy-passport";

        when(tokenProvider.getPayload(accessToken)).thenReturn(email);
        when(memberRepository.findByEmail(email)).thenReturn(member);
        when(passportProvider.generatePassport(any(MemberInfo.class))).thenReturn(passport);

        String actualPassport = authService.createPassport(new PassportCreateRequest(accessToken)).getPassport();

        assertEquals(passport, actualPassport);
    }
}