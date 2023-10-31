package com.codesmith.goojangmember.auth.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AuthLoginRequest {
    private String email;
    private String password;
}
