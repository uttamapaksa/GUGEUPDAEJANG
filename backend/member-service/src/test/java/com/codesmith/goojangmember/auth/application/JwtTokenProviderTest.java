package com.codesmith.goojangmember.auth.application;

import com.codesmith.goojangmember.auth.application.JwtTokenProvider;
import com.codesmith.goojangmember.auth.exception.InvalidTokenException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class JwtTokenProviderTest {
    private final JwtTokenProvider jwtTokenProvider = new JwtTokenProvider("SecretKeySecretKeySecretKeySecretKey", 3600000, 7200000);
    private final String validPayload = "validPayload";
    private final String invalidToken = "invalidToken";

    @DisplayName("액세스토큰이 발급된다")
    @Test
    public void 액세스토큰이_발급된다() {
        String accessToken = jwtTokenProvider.generateAccessToken(validPayload);
        assertNotNull(accessToken);
    }

    @DisplayName("리프레시토큰이 발급된다")
    @Test
    public void 리프레시토큰이_발급된다() {
        String refreshToken = jwtTokenProvider.generateRefreshToken(validPayload);
        assertNotNull(refreshToken);
    }

    @DisplayName("토큰에서 정보를 얻는다")
    @Test
    public void 토큰에서_정보를_얻는다() {
        String token = jwtTokenProvider.generateAccessToken(validPayload);
        String payload = jwtTokenProvider.getPayload(token);
        assertEquals(validPayload, payload);
    }

    @DisplayName("토큰이 유효한지 검증한다")
    @Test
    public void 토큰이_유효한지_검증한다() {
        String token = jwtTokenProvider.generateAccessToken(validPayload);
        assertDoesNotThrow(() -> jwtTokenProvider.validateToken(token));
    }

    @DisplayName("잘못된 토큰이면 예외를 반환한다")
    @Test
    public void 잘못된_토큰이면_예외를_반환한다() {
        assertThrows(InvalidTokenException.class, () -> jwtTokenProvider.validateToken(invalidToken));
    }
}