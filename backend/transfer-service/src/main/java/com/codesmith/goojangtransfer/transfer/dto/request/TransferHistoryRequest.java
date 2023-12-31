package com.codesmith.goojangtransfer.transfer.dto.request;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class TransferHistoryRequest {
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private boolean all;

    public TransferHistoryRequest(LocalDateTime startDate, LocalDateTime endDate, boolean all) {
        this.startDate = startDate == null ? LocalDateTime.now().minusDays(30) : startDate;
        this.endDate = endDate == null ? LocalDateTime.now() : endDate;
        this.all = all;
    }
}
