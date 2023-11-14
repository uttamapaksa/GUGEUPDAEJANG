package com.codesmith.goojangreport.report.persistence;

import com.codesmith.goojangreport.report.persistence.domain.ReportHeader;
import com.querydsl.core.Tuple;

import java.util.List;

public interface ReportSupportRepository {
    ReportHeader getHeaderValue(Long memberId);
    List<Tuple> getDailyStatus(Long memberId);
}
