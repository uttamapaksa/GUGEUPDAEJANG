package com.codesmith.goojangreport.report.persistence;

import com.codesmith.goojangreport.report.persistence.domain.DailyKtas;
import com.codesmith.goojangreport.report.persistence.domain.ReportHeader;

import java.time.LocalDateTime;
import java.util.List;

public interface ReportSupportRepository {
    ReportHeader getHeaderValue(Long memberId);
    List<Long> getKtasCount(Long memberId, String ktas);
}
