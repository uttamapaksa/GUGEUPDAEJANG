package com.codesmith.goojangmember.auth.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class TokenRefreshResponse {
    private String accessToken;
    private String refreshToken;
}
