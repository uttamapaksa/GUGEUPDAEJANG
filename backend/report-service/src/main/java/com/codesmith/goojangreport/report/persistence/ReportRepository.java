package com.codesmith.goojangreport.report.persistence;

import com.codesmith.goojangreport.report.persistence.domain.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long>, ReportSupportRepository {
    Report findByCallingId(Long callingId);
}