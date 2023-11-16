package com.codesmith.goojangtransfer.transfer.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TransferStatusChangeResponse {
    private boolean success;
    public TransferStatusChangeResponse(boolean success) {
        this.success = success;
    }
}
