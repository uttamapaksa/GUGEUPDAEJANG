package com.codesmith.goojangreport.report.persistence.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReportHeader {
    private Long today;
    private Long todayApproved;
    private Long todayRejected;
    private Double avgResponseTime;
    private Double avgTransferTime;
}
