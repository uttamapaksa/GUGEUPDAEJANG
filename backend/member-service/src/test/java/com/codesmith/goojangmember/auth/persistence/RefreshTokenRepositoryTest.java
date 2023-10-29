package com.codesmith.goojangmember.auth.persistence;

import com.codesmith.goojangmember.auth.persistence.domain.RefreshToken;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class RefreshTokenRepositoryTest {

    @Autowired
    TestEntityManager entityManager;

    @Autowired
    private RefreshTokenRepository refreshTokenRepository;

    @DisplayName("리프레시토큰이 성공적으로 저장된다")
    @Test
    void 리프레시토큰이_성공적으로_저장된다() {
        RefreshToken refreshToken = new RefreshToken("rftoken", "wonyoung");
        refreshTokenRepository.save(refreshToken);
        entityManager.flush();

        RefreshToken savedRefreshToken = entityManager.find(RefreshToken.class, refreshToken.getRefreshToken());
        assertThat(savedRefreshToken).isNotNull();
    }


}