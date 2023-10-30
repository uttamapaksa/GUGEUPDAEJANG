package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalDetailRepository extends JpaRepository<HospitalDetail, String>, HospitalDetailSupportRepository {
}
