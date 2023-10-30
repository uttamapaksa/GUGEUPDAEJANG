package com.codesmith.goojangmember.auth.application;

import com.codesmith.goojangmember.auth.exception.InvalidTokenException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtTokenProvider implements TokenProvider {
    private final SecretKey key;
    private final long accessExpirationInMilliSeconds;
    private final long refreshExpirationRefreshInMilliSeconds;

    public JwtTokenProvider(@Value("${jwt.key}") final String secretKey,
                            @Value("${jwt.expiration.access}") final long accessExpirationInMilliSeconds,
                            @Value("${jwt.expiration.refresh}") final long refreshExpirationRefreshInMilliSeconds) {
        this.key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
        this.accessExpirationInMilliSeconds = accessExpirationInMilliSeconds;
        this.refreshExpirationRefreshInMilliSeconds = refreshExpirationRefreshInMilliSeconds;
    }

    @Override
    public String generateAccessToken(String payload) {
        return generateToken(payload, accessExpirationInMilliSeconds);
    }

    @Override
    public String generateRefreshToken(String payload) {
        return generateToken(payload, refreshExpirationRefreshInMilliSeconds);
    }

    @Override
    public String getPayload(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    @Override
    public void validateToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);

            claims.getBody()
                    .getExpiration()
                    .before(new Date());
        } catch (final JwtException | IllegalArgumentException e) {
            throw new InvalidTokenException("만료되거나 잘못된 토큰입니다");
        }
    }

    private String generateToken(String payload, Long expirationInMilliseconds) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + expirationInMilliseconds);

        return Jwts.builder()
                .setSubject(payload)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

}
