package com.codesmith.goojangmember.global.passport.application;

import com.codesmith.goojangmember.auth.exception.InvalidTokenException;
import com.codesmith.goojangmember.auth.persistence.domain.RefreshToken;
import com.codesmith.goojangmember.global.passport.dto.MemberInfo;
import com.codesmith.goojangmember.global.passport.exception.InvalidPassportException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class HMacPassportProviderTest {
    private final String algorithm = "HmacSHA384";
    private final String secreteKey = "test-secrete-key";
    private final PassportProvider passportProvider = new HMacPassportProvider(algorithm, secreteKey, new ObjectMapper());
    private MemberInfo memberInfo;

    @BeforeEach
    void setUp() {
        memberInfo = new MemberInfo(1L, "test@tes.com", "testname", "profile.jpg", "ADMIN");
    }

    @DisplayName("패스포트가 발급된다")
    @Test
    public void 패스포트가_발급된다() {
        String passport = passportProvider.generatePassport(memberInfo);
        assertNotNull(passport);
    }

    @DisplayName("패스포트에서 사용자 정보를 얻는다")
    @Test
    public void 패스포트에서_사용자_정보를_얻는다() {
        String password = passportProvider.generatePassport(memberInfo);
        MemberInfo currMemberInfo = passportProvider.getMemberInfo(password);
        assertEquals(currMemberInfo.getId(), memberInfo.getId());
        assertEquals(currMemberInfo.getName(), memberInfo.getName());
        assertEquals(currMemberInfo.getRole(), memberInfo.getRole());
    }

    @DisplayName("패스포트가_유효한지_검증한다")
    @Test
    public void 패스포트가_유효한지_검증한다() {
        String password = passportProvider.generatePassport(memberInfo);
        assertDoesNotThrow(() -> passportProvider.validatePassport(password));
    }

    @DisplayName("패스포트 유효하지 않으면 예외를 발생시킨다")
    @Test
    public void 패스포트_유효하지_않으면_예외를_발생시킨다() {
        assertThrows(InvalidPassportException.class, () -> passportProvider.validatePassport("invalid-passport"));
    }

}