package com.codesmith.goojangtransfer.transfer.application;

import com.codesmith.goojangtransfer.transfer.dto.response.CreateTransferResponse;

public interface TransferService {
    CreateTransferResponse createTransfer(Long callingId);
}
