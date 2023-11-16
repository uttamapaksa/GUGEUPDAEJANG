package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.MemberTag;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MemberTagRepository extends JpaRepository<MemberTag, Long> {

    @Query("select m.tag from MemberTag m where m.memberId = :memberId")
    List<Tag> findByMemberId (@Param("memberId") Long memberId);

    Optional<MemberTag> findByMemberIdAndTag(Long memberId, Tag tag);

    void deleteByMemberIdAndTag(Long memberId, Tag tag);

    boolean existsByMemberIdAndTag(Long memberId, Tag tag);
}
