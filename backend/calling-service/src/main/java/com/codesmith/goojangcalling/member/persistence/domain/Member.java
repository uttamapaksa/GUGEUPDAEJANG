package com.codesmith.goojangcalling.member.persistence.domain;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.redis.core.RedisHash;

@RedisHash(value = "member")
@Getter
@AllArgsConstructor
@ToString
public class Member {
    @Id
    private Long id;
    private String email;
    private String name;
    private String imageUrl;
}
