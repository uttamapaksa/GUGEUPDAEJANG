package com.codesmith.goojangreport.report.persistence;

import com.codesmith.goojangreport.report.persistence.domain.DailyKtas;
import com.codesmith.goojangreport.report.persistence.domain.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long>, ReportSupportRepository {
    Report findByCallingId(Long callingId);

    @Query(nativeQuery = true,
        value = "SELECT " +
            "COALESCE(SUM(CASE WHEN r.ktas = 'KTAS1' THEN 1 ELSE 0 END), 0) AS ktas1, " +
            "COALESCE(SUM(CASE WHEN r.ktas = 'KTAS2' THEN 1 ELSE 0 END), 0) AS ktas2, " +
            "COALESCE(SUM(CASE WHEN r.ktas = 'KTAS3' THEN 1 ELSE 0 END), 0) AS ktas3, " +
            "COALESCE(SUM(CASE WHEN r.ktas = 'KTAS4' THEN 1 ELSE 0 END), 0) AS ktas4, " +
            "COALESCE(SUM(CASE WHEN r.ktas = 'KTAS5' THEN 1 ELSE 0 END), 0) AS ktas5 " +
            "FROM (" +
            "SELECT DATE_FORMAT(DATE_SUB(now(), INTERVAL 0 DAY), '%Y-%m-%d') AS day " +
            "UNION ALL SELECT DATE_FORMAT(DATE_SUB(now(), INTERVAL 1 DAY), '%Y-%m-%d') " +
            "UNION ALL SELECT DATE_FORMAT(DATE_SUB(now(), INTERVAL 2 DAY), '%Y-%m-%d') " +
            "UNION ALL SELECT DATE_FORMAT(DATE_SUB(now(), INTERVAL 3 DAY), '%Y-%m-%d') " +
            "UNION ALL SELECT DATE_FORMAT(DATE_SUB(now(), INTERVAL 4 DAY), '%Y-%m-%d') " +
            "UNION ALL SELECT DATE_FORMAT(DATE_SUB(now(), INTERVAL 5 DAY), '%Y-%m-%d') " +
            "UNION ALL SELECT DATE_FORMAT(DATE_SUB(now(), INTERVAL 6 DAY), '%Y-%m-%d')" +
            ") date_series " +
            "LEFT JOIN report r ON date_series.day = DATE(r.occurrence_time) AND r.hospital_member_id = :memberId " +
            "WHERE date_series.day BETWEEN CURDATE() - INTERVAL 7 DAY AND CURDATE() " +
            "GROUP BY date_series.day " +
            "ORDER BY date_series.day")
    List<DailyKtas> getDailyKtas(@Param("memberId")Long memberId);
}