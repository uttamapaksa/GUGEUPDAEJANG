package com.codesmith.goojangreport.report.persistence;

import com.codesmith.goojangreport.report.persistence.domain.ReportHeader;

public interface ReportSupportRepository {
    ReportHeader getHeaderValue(Long memberId);
}
