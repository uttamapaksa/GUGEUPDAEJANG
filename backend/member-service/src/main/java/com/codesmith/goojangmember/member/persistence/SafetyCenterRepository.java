package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.dto.response.CenterListResponse;
import com.codesmith.goojangmember.member.persistence.domain.SafetyCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SafetyCenterRepository extends JpaRepository<SafetyCenter, Long> {
    @Query("SELECT c FROM SafetyCenter c WHERE c.name LIKE %:keyword%")
    List<SafetyCenter> findAllCenterByKeyword(@Param("keyword") String keyword);

}
