package com.codesmith.goojangmember.global.passport.application;

import com.codesmith.goojangmember.global.passport.dto.MemberInfo;

public class HMacPassportProvider implements PassportProvider {
    @Override
    public String generatePassport(MemberInfo memberInfo) {
        return null;
    }

    @Override
    public MemberInfo getMemberInfo(String message) {
        return null;
    }

    @Override
    public boolean validatePassport(String message) {
        return false;
    }
}
