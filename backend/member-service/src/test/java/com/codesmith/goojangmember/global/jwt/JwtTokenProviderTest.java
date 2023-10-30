package com.codesmith.goojangmember.global.jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.Keys;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

class JwtTokenProviderTest {
    private JwtTokenProvider jwtTokenProvider;

    @Mock
    private Keys keys;

    private final String validPayload = "validPayload";
    private final String invalidToken = "invalidToken";

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        jwtTokenProvider = new JwtTokenProvider();
    }

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
        assertThrows(MalformedJwtException.class, () -> jwtTokenProvider.validateToken(invalidToken));
    }
}