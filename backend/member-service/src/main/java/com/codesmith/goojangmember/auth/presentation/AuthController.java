package com.codesmith.goojangmember.auth.presentation;

import com.codesmith.goojangmember.auth.application.AuthService;
import com.codesmith.goojangmember.auth.dto.request.AuthLoginRequest;
import com.codesmith.goojangmember.auth.dto.request.PassportCreateRequest;
import com.codesmith.goojangmember.auth.dto.request.TokenRefreshRequest;
import com.codesmith.goojangmember.auth.dto.response.AuthLoginResponse;
import com.codesmith.goojangmember.auth.dto.response.PassportCreateResponse;
import com.codesmith.goojangmember.auth.dto.response.TokenRefreshResponse;
import com.codesmith.goojangmember.global.passport.dto.MemberInfo;
import com.codesmith.goojangmember.global.passport.dto.Passport;
import com.codesmith.goojangmember.global.passport.presentation.AuthMember;
import lombok.Getter;
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

    @DeleteMapping("/logout")
    public ResponseEntity<Void> logout() {
        return ResponseEntity.ok().build();
    }

    @PostMapping("/passport")
    public ResponseEntity<PassportCreateResponse> getPassport(@RequestBody PassportCreateRequest passportCreateRequest) {
        return ResponseEntity.ok(authService.createPassport(passportCreateRequest));
    }

    @PostMapping("/refresh")
    public ResponseEntity<TokenRefreshResponse> refresh(@RequestBody TokenRefreshRequest tokenRefreshRequest) {
        return ResponseEntity.ok(authService.refresh(tokenRefreshRequest));
    }

    @GetMapping("/ppp")
    public String hi(@AuthMember MemberInfo memberInfo) {
        return memberInfo.getName() + " " + memberInfo.getRole() + " " + memberInfo.getId();
    }
}
