package com.codesmith.goojangmember.global.passport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class Passport {
    MemberInfo memberInfo;
    String MemberInfoIntegrity;
}
