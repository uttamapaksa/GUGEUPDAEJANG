package com.codesmith.goojanggateway.dto;

import io.jsonwebtoken.Claims;

public record TokenValidationResult(Claims claims, String token) {
}
