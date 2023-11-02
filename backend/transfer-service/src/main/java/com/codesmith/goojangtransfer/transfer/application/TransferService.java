package com.codesmith.goojangtransfer.transfer.application;

import com.codesmith.goojangtransfer.transfer.dto.response.TransferCreateResponse;

public interface TransferService {
    TransferCreateResponse createTransfer(Long callingId);
}
