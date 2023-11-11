package com.codesmith.goojangreport.global.passport;

public interface PassportProvider {
    String generatePassport(MemberInfo memberInfo);

    MemberInfo getMemberInfo(String message);

    boolean validatePassport(String message);
}
