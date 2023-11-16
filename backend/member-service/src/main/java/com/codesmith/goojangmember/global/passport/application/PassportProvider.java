package com.codesmith.goojangmember.global.passport.application;

import com.codesmith.goojangmember.global.passport.dto.MemberInfo;

public interface PassportProvider {
    String generatePassport(MemberInfo memberInfo);
    MemberInfo getMemberInfo(String message);
    boolean validatePassport(String message);
}
