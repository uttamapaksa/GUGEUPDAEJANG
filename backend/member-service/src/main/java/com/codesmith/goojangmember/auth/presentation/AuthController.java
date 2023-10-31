package com.codesmith.goojangmember.auth.presentation;

import com.codesmith.goojangmember.auth.application.AuthService;
import com.codesmith.goojangmember.auth.dto.request.AuthLoginRequest;
import com.codesmith.goojangmember.auth.dto.request.PassportCreateRequest;
import com.codesmith.goojangmember.auth.dto.response.AuthLoginResponse;
import com.codesmith.goojangmember.auth.dto.response.PassportCreateResponse;
import com.codesmith.goojangmember.global.passport.dto.Passport;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthLoginResponse> login(@RequestBody AuthLoginRequest authLoginRequest) {
        return ResponseEntity.ok(authService.login(authLoginRequest));
    }

    @PostMapping("/passport")
    public ResponseEntity<PassportCreateResponse> getPassport(@RequestBody PassportCreateRequest passportCreateRequest) {
        return ResponseEntity.ok(authService.createPassport(passportCreateRequest));
    }
}
