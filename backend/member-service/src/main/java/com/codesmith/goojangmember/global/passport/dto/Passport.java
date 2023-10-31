package com.codesmith.goojangmember.global.passport.dto;

import lombok.*;

@AllArgsConstructor
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Passport {
    MemberInfo memberInfo;
    String memberInfoIntegrity;
}
