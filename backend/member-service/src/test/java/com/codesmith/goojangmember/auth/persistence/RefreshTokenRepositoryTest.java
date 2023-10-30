package com.codesmith.goojangmember.auth.persistence;

import com.codesmith.goojangmember.auth.persistence.domain.RefreshToken;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class RefreshTokenRepositoryTest {

    @Autowired
    private RefreshTokenRepository refreshTokenRepository;

    private RefreshToken refreshToken;

    @BeforeEach
    void setUp() {
        refreshToken = new RefreshToken("rftoken", "wonyoung");
    }

    @AfterEach
    void teardown() {
        refreshTokenRepository.deleteById(refreshToken.getRefreshToken());
    }

    @DisplayName("리프레시토큰이 저장된다")
    @Test
    void 리프레시토큰이_저장된다() {
        RefreshToken refreshToken = new RefreshToken("rftoken", "wonyoung");
        refreshTokenRepository.save(refreshToken);

        RefreshToken savedRefreshToken = refreshTokenRepository.findById(refreshToken.getRefreshToken()).orElseThrow(RuntimeException::new);

        assertThat(savedRefreshToken.getRefreshToken()).isEqualTo(refreshToken.getRefreshToken());
        assertThat(savedRefreshToken.getEmail()).isEqualTo(refreshToken.getEmail());
    }

    @DisplayName("리프레시토큰의 값이 갱신된다")
    @Test
    void 리프레시토큰의_값이_갱신된다() {
        refreshTokenRepository.save(refreshToken);
        String newEmail = "new@email";

        RefreshToken savedRefreshToken = refreshTokenRepository.findById(refreshToken.getRefreshToken())
                .orElseThrow(RuntimeException::new);

        RefreshToken newRefreshToken = new RefreshToken(savedRefreshToken.getRefreshToken(), newEmail);
        savedRefreshToken = refreshTokenRepository.save(newRefreshToken);

        assertThat(savedRefreshToken.getEmail()).isEqualTo(newEmail);
    }

    @DisplayName("리프레시토큰이 삭제된다")
    @Test
    void 리프레시토큰이_삭제된다() {
        refreshTokenRepository.save(refreshToken);

        refreshTokenRepository.delete(refreshToken);
        Optional<RefreshToken> deletedProduct = refreshTokenRepository.findById(refreshToken.getRefreshToken());

        assertTrue(deletedProduct.isEmpty());
    }


}