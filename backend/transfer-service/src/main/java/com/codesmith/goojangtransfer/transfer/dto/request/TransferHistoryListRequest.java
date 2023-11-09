package com.codesmith.goojangtransfer.transfer.dto.request;

import lombok.Getter;

@Getter
public class TransferHistoryListRequest {
    private String startDate;
    private String endDate;
    private String view;

    public TransferHistoryListRequest(String startDate, String endDate, String view) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.view = view == null ? "all" : view;
    }
}
