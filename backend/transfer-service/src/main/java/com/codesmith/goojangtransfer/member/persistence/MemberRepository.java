package com.codesmith.goojangtransfer.member.persistence;

import com.codesmith.goojangtransfer.member.persistence.domain.Member;

import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Long> {
    Member save(Member member);
}
