package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;
import org.assertj.core.api.Assertions;
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

    @Test
    void 태그조회_멤버별() throws Exception {
        //given
        Long memberId = 521L;

        //when
        List<MemberTagResponse> memberTagList = memberTagRepository.findByMemberId(memberId);

        //then
        Assertions.assertThat(memberTagList.size()).isGreaterThan(0);

    }
}