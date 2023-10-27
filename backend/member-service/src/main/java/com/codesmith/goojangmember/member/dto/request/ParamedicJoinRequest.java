package com.codesmith.goojangmember.member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ParamedicJoinRequest {
    private String email;
    private String password;
    private String name;
    private String imageUrl;
    private String role;
    private Long centerId;
}
