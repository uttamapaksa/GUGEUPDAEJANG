package com.codesmith.goojangtransfer.transfer.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TransferCreateResponse {
    private Long transferId;
    private boolean success;
    public TransferCreateResponse(Long transferId, boolean success) {
        this.transferId = transferId;
        this.success = success;
    }
}
