package com.codesmith.goojangmember.member.persistence;

import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HospitalDetailRepository extends JpaRepository<HospitalDetail, String> {
    @Query(value = """
        SELECT * FROM hospital_detail WHERE (
            6371 * ACOS(COS(RADIANS(:latitude))
                * COS(RADIANS(latitude))
                * COS(RADIANS(longitude) - RADIANS(:longitude))
                + SIN(RADIANS(:latitude))
                * SIN(RADIANS(latitude))
            )
        ) < :distance""", nativeQuery = true)
    List<HospitalDetail> findHospitalWithinDistance(@Param("latitude") Double latitude, @Param("longitude") Double longitude, @Param("distance") Double distance);

}
