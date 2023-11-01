package com.codesmith.goojanggateway.application;

import com.codesmith.goojanggateway.dto.CustomPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class AuthenticationManager implements ReactiveAuthenticationManager {
    @Override
    public Mono<Authentication> authenticate(Authentication authentication) {
        CustomPrincipal principal = (CustomPrincipal) authentication.getPrincipal();

//        return memberRepository.findByMemberId(principal.getId())
//                .switchIfEmpty(Mono.error(new UnauthorizedException("잘못된 사용자입니다.")))
//                .map(user -> authentication);

        return null;
    }
}