package com.codesmith.goojangmember.auth.persistence.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@RedisHash(value = "refresh_token", timeToLive = 604800000)
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RefreshToken {
    @Id
    String refreshToken;
    String email;
}