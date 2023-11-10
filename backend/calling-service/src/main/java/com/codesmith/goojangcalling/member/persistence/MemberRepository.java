package com.codesmith.goojangcalling.member.persistence;

import com.codesmith.goojangcalling.member.persistence.domain.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Long> {
    Member save(Member member);
}