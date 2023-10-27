package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.persistence.domain.SafetyCenter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SafetyCenterRepository extends JpaRepository<SafetyCenter, Long> {
}
