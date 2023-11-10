package com.codesmith.goojangtransfer.member.persistence;

import com.codesmith.goojangtransfer.member.persistence.domain.Member;

import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, String> {
    boolean existsById(String memberId);
    Optional<Member> findById(String id);
    Member save(Member member);
}
