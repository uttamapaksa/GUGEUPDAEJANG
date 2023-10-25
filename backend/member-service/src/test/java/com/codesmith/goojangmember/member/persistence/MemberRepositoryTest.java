package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import org.junit.jupiter.api.DisplayName;
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

    @DisplayName("회원이 성공적으로 추가된다")
    @Test
    void 회원이_성공적으로_추가된다() {
        Member newMember = new Member();

        Member savedMember = memberRepository.save(newMember);

        assertNotNull(savedMember.getId());
        assertThat(savedMember.getEmail()).isEqualTo(newMember.getEmail());
        assertThat(savedMember.getName()).isEqualTo(newMember.getName());
    }
}