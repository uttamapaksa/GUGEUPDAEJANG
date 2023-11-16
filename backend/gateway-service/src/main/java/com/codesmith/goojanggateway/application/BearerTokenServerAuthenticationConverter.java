package com.codesmith.goojanggateway.application;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.server.authentication.ServerAuthenticationConverter;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
public class BearerTokenServerAuthenticationConverter implements ServerAuthenticationConverter {
    private final AuthenticationProvider authenticationProvider;
    private final JwtTokenService jwtTokenService;

    private final String BEARER_PREFIX = "Bearer_";

    @Override
    public Mono<Authentication> convert(ServerWebExchange exchange) {
        return extractHeader(exchange)
                .flatMap(authValue -> Mono.justOrEmpty(authValue.substring(BEARER_PREFIX.length())))
                .flatMap(jwtTokenService::validateToken)
                .flatMap(tokenValidationResult -> {
                    return authenticationProvider.create(tokenValidationResult)
                            .map(authentication -> {
                                String passport = (String) authentication.getPrincipal();

                                exchange.getRequest().mutate()
                                        .header("Passport", passport)
                                        .build();

                                return authentication;
                            });
                });
    }

    private Mono<String> extractHeader(ServerWebExchange exchange) {
        return Mono.justOrEmpty(exchange.getRequest()
                .getHeaders()
                .getFirst(HttpHeaders.AUTHORIZATION));
    }
}
