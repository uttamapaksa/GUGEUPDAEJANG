package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.exception.DuplicateMemberTagException;
import com.codesmith.goojangcalling.calling.persistence.domain.MemberTag;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class MemberTagRepositoryTest {

    @Autowired
    private MemberTagRepository memberTagRepository;

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private TestEntityManager em;

    private Long memberId;
    private String inputTagName;
    private Tag tag;

    @BeforeEach
    void setTag() {
        memberId = 521L;
        inputTagName = "추락";
        tag = new Tag(inputTagName);
    }

    @DisplayName("사용자 태그를 조회한다.")
    @Test
    void 사용자_태그를_조회한다() throws Exception {
        List<Tag> tagList = memberTagRepository.findByMemberId(memberId);

        assertThat(tagList.size()).isGreaterThan(0);
    }

    @DisplayName("추가할 태그가 존재하면 사용자태그에 추가한다.")
    @Test
    void 추가할_태그가_존재하면_사용자태그에_추가한다() throws Exception {
        assertFalse(tagRepository.findByName(inputTagName).isEmpty());
        tag = tagRepository.findByName(inputTagName).orElseThrow();
        MemberTag memberTag = new MemberTag(memberId, tag);
        MemberTag savedMemberTag = memberTagRepository.save(memberTag);

        assertThat(savedMemberTag.getTag()).isEqualTo(tag);
        assertThat(savedMemberTag.getMemberId()).isEqualTo(521L);
    }

    @DisplayName("이미 생성된 사용자태그면 예외를 반환한다.")
    @Test
    void 이미_생성된_사용자태그면_예외를_반환한다() throws Exception {
        tag = tagRepository.findByName(inputTagName).orElseThrow();

        assertThrows(DuplicateMemberTagException.class, () -> {
            Optional<MemberTag> memberTagOptional = memberTagRepository.findByMemberIdAndTag(memberId, tag);
            memberTagOptional.ifPresent(memberTag -> {
                throw new DuplicateMemberTagException("이미 생성된 사용자 태그입니다.");
            });
        });
    }

    @DisplayName("추가할 태그가 존재하지 않으면 태그를 생성하고 사용자태그에 추가한다.")
    @Test
    void 추가할_태그가_존재하지_않으면_태그를_생성하고_사용자태그에_추가한다() throws Exception {
        inputTagName = "추락1";
        Optional<Tag> optionalTag = tagRepository.findByName(inputTagName);
        assertFalse(optionalTag.isPresent(), "태그가 존재합니다.");
        tag = new Tag(inputTagName);

        tagRepository.save(tag);
        MemberTag memberTag = new MemberTag(memberId, tag);
        MemberTag savedMemberTag = memberTagRepository.save(memberTag);

        assertThat(savedMemberTag.getMemberId()).isEqualTo(521L);
        assertThat(savedMemberTag.getTag()).isEqualTo(tag);
    }

    @DisplayName("사용자 태그를 삭제한다.")
    @Test
    void 사용자_태그를_삭제한다() throws Exception {
        tag = new Tag("교통사고");
        em.persistAndFlush(tag);
        MemberTag memberTag = new MemberTag(memberId, tag);
        em.persistAndFlush(memberTag);

        memberTagRepository.deleteByMemberIdAndTag(memberId, tag);

        Optional<MemberTag> findMemberTag = memberTagRepository.findByMemberIdAndTag(memberId, tag);
        assertThat(findMemberTag.isPresent()).isFalse();
    }
}