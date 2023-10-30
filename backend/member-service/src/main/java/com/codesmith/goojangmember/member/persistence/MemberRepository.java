package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.persistence.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByEmail(String email);

    boolean existsByEmail(String email);

    void deleteByEmail(String email);
}
