package com.codesmith.goojangtransfer.transfer.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TransferCompleteResponse {
    private boolean success;
    public TransferCompleteResponse(boolean success) {
        this.success = success;
    }
}
