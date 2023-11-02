package com.codesmith.goojangtransfer.transfer.application;

import com.codesmith.goojangtransfer.transfer.dto.response.TransferCompleteResponse;
import com.codesmith.goojangtransfer.transfer.dto.response.TransferCreateResponse;
import com.codesmith.goojangtransfer.transfer.exception.TransferNotFoundException;
import com.codesmith.goojangtransfer.transfer.persistence.TransferRepository;
import com.codesmith.goojangtransfer.transfer.persistence.domain.Transfer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class TransferServiceImpl implements TransferService {

    private final TransferRepository transferRepository;
    private final TransferValidator transferValidator;

    @Override
    public TransferCreateResponse createTransfer(Long callingId) {
        Transfer transfer = transferRepository.save(new Transfer(callingId, false, null));
        return new TransferCreateResponse(transfer.getId(), true);
    }

    @Override
    public TransferCompleteResponse completeTransfer(Long transferId) {
        transferValidator.validateTransferId(transferId);
        transferValidator.validateTransferArrive(transferId);
        Transfer transfer = transferRepository.findById(transferId).get();
        transfer.updateArriveInfo(true, LocalDateTime.now());
        transferRepository.save(transfer);
        return new TransferCompleteResponse(true);
    }
}
