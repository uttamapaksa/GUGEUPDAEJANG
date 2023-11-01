package com.codesmith.goojanggateway.application;

import com.codesmith.goojanggateway.dto.TokenValidationResult;
import com.codesmith.goojanggateway.dto.request.PassportCreateRequest;
import com.codesmith.goojanggateway.dto.response.PassportCreateResponse;
import com.codesmith.goojanggateway.infra.openfeign.MemberServiceClient;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
@RequiredArgsConstructor
public class AuthenticationProvider {
    private final MemberServiceClient memberServiceClient;

    public Mono<Authentication> create(TokenValidationResult tokenValidationResult) {
        Claims claims = tokenValidationResult.claims();
        String email = claims.getSubject();
        PassportCreateResponse response = memberServiceClient.getPassport(new PassportCreateRequest(email));

        List<SimpleGrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("USER"));
        return Mono.justOrEmpty(new UsernamePasswordAuthenticationToken(response.getPassport(), null, authorities));
    }

}