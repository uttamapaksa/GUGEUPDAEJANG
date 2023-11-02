package com.codesmith.goojangtransfer.transfer.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateTransferResponse {
    private Long transferId;
    private boolean success;
    public CreateTransferResponse(Long transferId, boolean success) {
        this.transferId = transferId;
        this.success = success;
    }
}
