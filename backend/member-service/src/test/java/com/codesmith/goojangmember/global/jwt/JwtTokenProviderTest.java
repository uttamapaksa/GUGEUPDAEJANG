package com.codesmith.goojangmember.global.jwt;

import com.codesmith.goojangmember.auth.exception.InvalidTokenException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.ContextConfiguration;

import javax.crypto.SecretKey;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

class JwtTokenProviderTest {
    private final JwtTokenProvider jwtTokenProvider = new JwtTokenProvider("SecretKeySecretKeySecretKeySecretKey", 3600000, 7200000);
    private final String validPayload = "validPayload";
    private final String invalidToken = "invalidToken";

    @Test
    public void testCreateAccessToken() {
        String accessToken = jwtTokenProvider.generateAccessToken(validPayload);
        assertNotNull(accessToken);
    }

    @Test
    public void testCreateRefreshToken() {
        String refreshToken = jwtTokenProvider.generateRefreshToken(validPayload);
        assertNotNull(refreshToken);
    }

    @Test
    public void testGetPayload() {
        String token = jwtTokenProvider.generateAccessToken(validPayload);
        String payload = jwtTokenProvider.getPayload(token);
        assertEquals(validPayload, payload);
    }

    @Test
    public void testValidateTokenWithValidToken() {
        String token = jwtTokenProvider.generateAccessToken(validPayload);
        assertDoesNotThrow(() -> jwtTokenProvider.validateToken(token));
    }

    @Test
    public void testValidateTokenWithInvalidToken() {
        assertThrows(InvalidTokenException.class, () -> jwtTokenProvider.validateToken(invalidToken));
    }
}