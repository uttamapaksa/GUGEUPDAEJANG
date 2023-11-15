package com.codesmith.goojangreport.report.persistence;

import com.codesmith.goojangreport.report.persistence.domain.DailyStatus;
import com.codesmith.goojangreport.report.persistence.domain.ReportHeader;

import java.util.Map;

public interface ReportSupportRepository {
    ReportHeader getHeaderValue(Long memberId);
    DailyStatus getDailyStatus(Long memberId);
    Map<Integer, Long> getTimeGroup(Long memberId);
}
