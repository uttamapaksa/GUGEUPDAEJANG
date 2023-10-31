package com.codesmith.goojangmember.member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ParamedicJoinRequest {
    private String email;
    private String password;
    private String name;
    private String imageUrl;
    private String role;
    private Long centerId;
}
