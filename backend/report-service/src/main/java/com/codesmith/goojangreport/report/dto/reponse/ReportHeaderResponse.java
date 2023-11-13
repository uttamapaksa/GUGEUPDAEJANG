package com.codesmith.goojangreport.report.dto.reponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReportHeaderResponse {
    private Long today;
    private Long todayApproved;
    private Long todayRejected;
    private Double avgResponseTime;
    private Double avgTransferTime;
}
