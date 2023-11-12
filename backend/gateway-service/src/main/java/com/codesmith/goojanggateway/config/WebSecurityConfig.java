package com.codesmith.goojanggateway.config;

import com.codesmith.goojanggateway.application.AuthenticationManager;
import com.codesmith.goojanggateway.application.AuthenticationProvider;
import com.codesmith.goojanggateway.application.BearerTokenServerAuthenticationConverter;
import com.codesmith.goojanggateway.application.JwtTokenService;
import com.codesmith.goojanggateway.infra.openfeign.MemberServiceClient;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.authentication.AuthenticationWebFilter;
import org.springframework.security.web.server.util.matcher.ServerWebExchangeMatchers;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@RequiredArgsConstructor

@EnableReactiveMethodSecurity
public class WebSecurityConfig {
    private final JwtTokenService jwtTokenService;
    private final AuthenticationManager authenticationManager;
    private final AuthenticationProvider authenticationProvider;
    private final MemberServiceClient memberServiceClient;

    @Bean
    public SecurityWebFilterChain filterChain(ServerHttpSecurity http) throws Exception {
        return http
                .cors(withDefaults())
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .authorizeExchange(exchanges ->
                        exchanges
                                .pathMatchers(HttpMethod.OPTIONS).permitAll()
                                .pathMatchers("/api/member/hospital/join", "/api/member/paramedic/join", "/api/member/hospital").permitAll()
                                .pathMatchers("/api/auth/refresh", "/api/member/center", "/api/member/check-email").permitAll()
                                .pathMatchers("/api/auth/login").permitAll()
                                .anyExchange()
                                .authenticated()
                )
                .addFilterAt(bearerAuthenticationFilter(), SecurityWebFiltersOrder.AUTHENTICATION)
                .exceptionHandling(exceptionHandling -> exceptionHandling
                        .authenticationEntryPoint((swe, e) -> {
                            return Mono.fromRunnable(() -> swe.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED));
                        })
                        .accessDeniedHandler((swe, e) -> {
                            return Mono.fromRunnable(() -> swe.getResponse().setStatusCode(HttpStatus.FORBIDDEN));
                        })
                ).build();
    }

    private AuthenticationWebFilter bearerAuthenticationFilter() {
        AuthenticationWebFilter bearerAuthenticationFilter = new AuthenticationWebFilter(authenticationManager);
        bearerAuthenticationFilter.setServerAuthenticationConverter(
                new BearerTokenServerAuthenticationConverter(
                        authenticationProvider,
                        jwtTokenService)
        );

        bearerAuthenticationFilter.setRequiresAuthenticationMatcher(ServerWebExchangeMatchers.pathMatchers("/**"));

        return bearerAuthenticationFilter;
    }

    @Bean
    public HttpMessageConverters customConverters() {
        List<HttpMessageConverter<?>> converters = new ArrayList<>();
        converters.add(new MappingJackson2HttpMessageConverter());
        return new HttpMessageConverters(converters);
    }
}
