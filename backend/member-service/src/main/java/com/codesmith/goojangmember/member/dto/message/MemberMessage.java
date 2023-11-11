package com.codesmith.goojangmember.member.dto.message;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberMessage {
    private Long id;
    private String email;
    private String name;
    private String imageUrl;
}
