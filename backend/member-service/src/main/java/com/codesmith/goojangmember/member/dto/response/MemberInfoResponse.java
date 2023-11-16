package com.codesmith.goojangmember.member.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class MemberInfoResponse {
    private Long id;
    private String email;
    private String name;
    private String imageUrl;
}
