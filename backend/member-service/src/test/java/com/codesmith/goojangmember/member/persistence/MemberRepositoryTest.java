package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @Test
    void 성공() {
        Member member = memberRepository.findById(1L).orElseThrow(RuntimeException::new);

        assertThat(member.getId()).isEqualTo(1L);
        assertThat(member.getEmail()).isEqualTo("test@test.com");
        assertThat(member.getName()).isEqualTo("test");
    }

    @Test
    void 실패(){
        assertThatThrownBy(() ->
                memberRepository.findById(0L)
                        .orElseThrow(() -> new MemberNotFoundException("no member id :" + 0L)))
                .isInstanceOf(MemberNotFoundException.class);
    }

}