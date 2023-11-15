package com.codesmith.goojangreport.report.persistence;

import com.codesmith.goojangreport.report.persistence.domain.AgeGroup;
import com.codesmith.goojangreport.report.persistence.domain.DailyKtas;
import com.codesmith.goojangreport.report.persistence.domain.MonthlyApproved;
import com.codesmith.goojangreport.report.persistence.domain.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long>, ReportSupportRepository {
    Report findByCallingId(Long callingId);

    @Query(nativeQuery = true, value =
            "SELECT " +
                    "SUM(CASE WHEN r.ktas = 'KTAS1' THEN 1 ELSE 0 END) AS ktas1, " +
                    "SUM(CASE WHEN r.ktas = 'KTAS2' THEN 1 ELSE 0 END) AS ktas2, " +
                    "SUM(CASE WHEN r.ktas = 'KTAS3' THEN 1 ELSE 0 END) AS ktas3, " +
                    "SUM(CASE WHEN r.ktas = 'KTAS4' THEN 1 ELSE 0 END) AS ktas4, " +
                    "SUM(CASE WHEN r.ktas = 'KTAS5' THEN 1 ELSE 0 END) AS ktas5 " +
                    "FROM (" +
                    "SELECT " +
                    "DATE_FORMAT(NOW() - INTERVAL ROW_NUMBER() OVER () - 1 DAY, '%Y-%m-%d') AS day " +
                    "FROM information_schema.columns " +
                    "LIMIT 7" +
                    ") date_series " +
                    "LEFT JOIN report r ON date_series.day = DATE(r.occurrence_time) AND r.hospital_member_id = :memberId " +
                    "GROUP BY date_series.day")
    List<DailyKtas> getDailyKtas(@Param("memberId")Long memberId);

    @Query(nativeQuery = true, value =
            "SELECT " +
                    "count(r.id) AS total, " +
                    "SUM(CASE WHEN r.calling_status = 'APPROVED' THEN 1 ELSE 0 END) + " +
                    "SUM(CASE WHEN r.calling_status = 'FIXED' THEN 1 ELSE 0 END) + " +
                    "SUM(CASE WHEN r.calling_status = 'CANCELED' THEN 1 ELSE 0 END) AS approved " +
                    "FROM (" +
                    "SELECT DATE_FORMAT(DATE_SUB(CONCAT(:year, '-12-31'), INTERVAL ROW_NUMBER() OVER () - 1 MONTH), '%Y-%m') AS month " +
                    "FROM information_schema.columns " +
                    "LIMIT 12" +
                    ") date_series " +
                    "LEFT JOIN report r ON date_series.month = DATE_FORMAT(r.calling_time, '%Y-%m') AND r.hospital_member_id = :memberId " +
                    "GROUP BY date_series.month")
    List<MonthlyApproved> getMonthlyApproved(@Param("memberId")Long memberId, @Param("year")Long year);

    @Query(value = "SELECT " +
            "ag.age_group as ageGroup, " +
            "g.gender as gender, " +
            "COUNT(r.id) as count " +
            "FROM " +
            "(SELECT DISTINCT age_group FROM report WHERE hospital_member_id = :memberId) ag " +
            "CROSS JOIN " +
            "(SELECT DISTINCT gender FROM report WHERE hospital_member_id = :memberId) g " +
            "LEFT JOIN " +
            "report r ON ag.age_group = r.age_group AND g.gender = r.gender AND r.hospital_member_id = :memberId " +
            "GROUP BY ag.age_group, g.gender " +
            "ORDER BY " +
            "CASE ag.age_group " +
            "WHEN 'INFANT' THEN 1 " +
            "WHEN 'CHILD' THEN 2 " +
            "WHEN 'ADOLESCENT' THEN 3 " +
            "WHEN 'YOUTH' THEN 4 " +
            "WHEN 'MIDDLE' THEN 5 " +
            "WHEN 'SENIOR' THEN 6 " +
            "ELSE 7 " +
            "END",
            nativeQuery = true)
    List<AgeGroup> getAgeGroup(@Param("memberId") Long memberId);
}