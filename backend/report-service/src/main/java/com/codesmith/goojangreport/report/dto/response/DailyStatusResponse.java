package com.codesmith.goojangreport.report.dto.response;

import com.querydsl.core.Tuple;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DailyStatusResponse {
    private Long approvedCount;
    private Long canceledCount;
    private Long fixedCount;
    private Long pendingCount;
    private Long terminatedCount;

    public DailyStatusResponse(List<Tuple> tupleList) {
        tupleList.forEach(o -> {
            String status = o.get(0, String.class);
            Long count = o.get(1, Long.class);

            switch (status) {
                case "APPROVED":
                    this.setApprovedCount(count);
                    break;
                case "CANCELED":
                    this.setCanceledCount(count);
                    break;
                case "FIXED":
                    this.setFixedCount(count);
                    break;
                case "PENDING":
                    this.setPendingCount(count);
                    break;
                case "TERMINATED":
                    this.setTerminatedCount(count);
                    break;
            }
        });
    }
}
