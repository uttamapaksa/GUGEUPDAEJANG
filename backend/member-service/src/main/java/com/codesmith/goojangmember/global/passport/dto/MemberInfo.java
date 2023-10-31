package com.codesmith.goojangmember.global.passport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberInfo {
    private Long id;
    private String email;
    private String name;
    private String role;
}