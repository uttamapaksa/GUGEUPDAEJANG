package com.codesmith.goojangmember.global.jwt.encoder;

import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.Role;
import org.apache.hc.client5.http.auth.AuthStateCacheable;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@SpringBootTest
class BcryptPasswordEncoderTest {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @DisplayName("비밀번호가 암호화된다")
    @Test
    void 비밀번호가_암호화된다() {
        String password = "hello1234";
        String encodedPassword = passwordEncoder.encode(password);
        String wrongPassword = "randompw";

        assertThat(encodedPassword).isNotEqualTo(password);
        assertThat(passwordEncoder.matches(password, encodedPassword)).isTrue();
        assertThat(passwordEncoder.matches(wrongPassword, encodedPassword)).isFalse();
    }

}