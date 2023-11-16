package com.codesmith.goojangmember.auth.application;

public interface TokenProvider {
    String generateAccessToken(String payload);
    String generateRefreshToken(String payload);
    String getPayload(String token);
    void validateToken(String token);
}
