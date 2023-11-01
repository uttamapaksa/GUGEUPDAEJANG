package com.codesmith.goojangcalling.global.passport;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Passport {
    MemberInfo memberInfo;
    String memberInfoIntegrity;
}
