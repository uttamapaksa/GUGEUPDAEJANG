package com.codesmith.goojangreport.report.persistence;

import com.codesmith.goojangreport.report.dto.response.DailyStatusResponse;
import com.codesmith.goojangreport.report.persistence.domain.ReportHeader;

import java.util.Map;

public interface ReportSupportRepository {
    ReportHeader getHeaderValue(Long memberId);
    DailyStatusResponse getDailyStatus(Long memberId);
    Map<Integer, Long> getTimeGroup(Long memberId);
}
