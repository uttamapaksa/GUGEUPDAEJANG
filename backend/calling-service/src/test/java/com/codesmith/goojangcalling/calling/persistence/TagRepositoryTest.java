package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class TagRepositoryTest {

    @Autowired
    private TagRepository tagRepository;

    @DisplayName("전체 태그를 조회한다.")
    @Test
    void 전체_태그를_조회한다() throws Exception {
        List<Tag> tagList = tagRepository.findAll();

        assertThat(tagList.size()).isGreaterThan(0);
    }
}