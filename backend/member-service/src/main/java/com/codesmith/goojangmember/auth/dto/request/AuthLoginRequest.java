package com.codesmith.goojangmember.auth.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthLoginRequest {
    private String email;
    private String password;
}
