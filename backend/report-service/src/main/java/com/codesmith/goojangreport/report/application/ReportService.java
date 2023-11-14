package com.codesmith.goojangreport.report.application;

import com.codesmith.goojangreport.report.dto.message.CallingCreateMessage;
import com.codesmith.goojangreport.report.dto.message.CallingStatusMessage;
import com.codesmith.goojangreport.report.dto.message.TransferMessage;
import com.codesmith.goojangreport.report.dto.response.DailyKtasResponse;
import com.codesmith.goojangreport.report.dto.response.MonthlyApprovedResponse;
import com.codesmith.goojangreport.report.dto.response.ReportHeaderResponse;

public interface ReportService {
    void createReport(CallingCreateMessage callingCreateMessage);
    void updateReport(CallingStatusMessage callingStatusMessage);
    void updateReport(TransferMessage transferMessage);
    ReportHeaderResponse getHeaderValues(Long memberId);
    DailyKtasResponse getDailyKtas(Long memberId);
    MonthlyApprovedResponse getMonthlyApproved(Long memberId, Long year);
}
