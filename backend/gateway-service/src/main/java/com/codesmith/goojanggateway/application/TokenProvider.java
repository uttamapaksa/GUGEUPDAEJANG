package com.codesmith.goojanggateway.application;

public interface TokenProvider {
    String getPayload(String token);
    void validateToken(String token);
}
