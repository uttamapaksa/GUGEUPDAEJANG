package com.codesmith.goojanggateway.application;

import com.codesmith.goojanggateway.dto.CustomPrincipal;
import com.codesmith.goojanggateway.dto.TokenValidationResult;
import io.jsonwebtoken.Claims;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.List;
@Component
public class AuthenticationProvider {

    public Mono<Authentication> create(TokenValidationResult tokenValidationResult) {
        Claims claims = tokenValidationResult.claims();
        String subject = claims.getSubject();

//        String role = claims.get("role", String.class);
//        String username = claims.get("username", String.class);

        System.out.println(subject + "============================");

        List<SimpleGrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("ROLE_HOSPITAL"));

        Long principalId = Long.parseLong(subject);
        CustomPrincipal principal = new CustomPrincipal(principalId, subject);

        return Mono.justOrEmpty(new UsernamePasswordAuthenticationToken(principal, null, authorities));
    }

}