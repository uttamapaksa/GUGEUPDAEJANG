package com.codesmith.goojangreport.global.passport;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Passport {
    MemberInfo memberInfo;
    String memberInfoIntegrity;
}
