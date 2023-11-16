package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.persistence.domain.ParamedicDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParamedicDetailRepository extends JpaRepository<ParamedicDetail, Long> {
    ParamedicDetail findByMemberId(Long memberId);
    List<ParamedicDetail> findAllBySafetyCenterId(Long safetyCenterId);
}
