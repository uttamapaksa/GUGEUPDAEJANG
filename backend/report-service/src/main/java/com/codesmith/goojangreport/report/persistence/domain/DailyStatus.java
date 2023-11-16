package com.codesmith.goojangreport.report.persistence.domain;

import com.querydsl.core.Tuple;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class DailyStatus {
    private Long approvedCount;
    private Long canceledCount;
    private Long fixedCount;
    private Long pendingCount;
    private Long rejectedCount;
    private Long terminatedCount;

    public DailyStatus(List<Tuple> tupleList) {
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
                case "REJECTED":
                    this.setRejectedCount(count);
                    break;
                case "TERMINATED":
                    this.setTerminatedCount(count);
                    break;
            }
        });
    }
}
