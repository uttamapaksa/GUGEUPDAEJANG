package com.codesmith.goojangreport.report.application;

import com.codesmith.goojangreport.report.dto.message.CallingCreateMessage;
import com.codesmith.goojangreport.report.dto.message.CallingStatusMessage;
import com.codesmith.goojangreport.report.dto.message.TransferMessage;

public interface ReportService {
    void createReport(CallingCreateMessage callingCreateMessage);
    void updateReport(CallingStatusMessage callingStatusMessage);
    void updateReport(TransferMessage transferMessage);

}
