package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class MemberTagRepositoryTest {

    @Autowired
    private MemberTagRepository memberTagRepository;

    @DisplayName("사용자 태그를 조회한다.")
    @Test
    void 사용자_태그를_조회한다() throws Exception {
        Long memberId = 521L;

        List<Tag> tagList = memberTagRepository.findByMemberId(memberId);

        Assertions.assertThat(tagList.size()).isGreaterThan(0);

    }
}