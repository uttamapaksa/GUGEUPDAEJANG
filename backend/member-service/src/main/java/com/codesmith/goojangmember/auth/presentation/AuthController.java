package com.codesmith.goojangmember.auth.presentation;

import com.codesmith.goojangmember.auth.application.AuthService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
}
