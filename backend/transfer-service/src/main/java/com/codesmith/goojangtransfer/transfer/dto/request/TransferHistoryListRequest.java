package com.codesmith.goojangtransfer.transfer.dto.request;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class TransferHistoryListRequest {
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String view;

    public TransferHistoryListRequest(LocalDateTime startDate, LocalDateTime endDate, String view) {
        this.startDate = startDate == null ? LocalDateTime.now().minusDays(30) : startDate;
        this.endDate = endDate == null ? LocalDateTime.now() : endDate;
        this.view = view == null ? "all" : view;
    }
}
