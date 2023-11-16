package com.codesmith.goojangreport.report.dto.response;

import com.codesmith.goojangreport.report.persistence.domain.DailyStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DailyStatusResponse {
    private List<Long> dailyStatusList;

    public DailyStatusResponse(DailyStatus dailyStatus) {
        List<Long> statusList = new ArrayList<>();
        statusList.add(dailyStatus.getApprovedCount() == null ? 0 : dailyStatus.getApprovedCount());
        statusList.add(dailyStatus.getRejectedCount() == null ? 0 : dailyStatus.getRejectedCount());
        statusList.add(dailyStatus.getPendingCount() == null ? 0 : dailyStatus.getPendingCount());
        statusList.add(dailyStatus.getTerminatedCount() == null ? 0 : dailyStatus.getTerminatedCount());
        statusList.add(dailyStatus.getFixedCount() == null ? 0 : dailyStatus.getFixedCount());
        statusList.add(dailyStatus.getCanceledCount() == null ? 0 : dailyStatus.getCanceledCount());
        this.dailyStatusList = statusList;
    }
}
