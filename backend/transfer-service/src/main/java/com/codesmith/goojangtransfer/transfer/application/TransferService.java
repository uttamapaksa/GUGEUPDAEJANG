package com.codesmith.goojangtransfer.transfer.application;

import com.codesmith.goojangtransfer.transfer.dto.response.TransferStatusChangeResponse;
import com.codesmith.goojangtransfer.transfer.dto.response.TransferCreateResponse;

public interface TransferService {
    TransferCreateResponse createTransfer(Long callingId);
    TransferStatusChangeResponse changeTransferStatus(Long transferId, int status);
}
