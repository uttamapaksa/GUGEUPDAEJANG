package com.codesmith.goojangtransfer.transfer.application;

import com.codesmith.goojangtransfer.transfer.dto.response.TransferCreateResponse;
import com.codesmith.goojangtransfer.transfer.dto.response.TransferStatusChangeResponse;
import com.codesmith.goojangtransfer.transfer.persistence.TransferRepository;
import com.codesmith.goojangtransfer.transfer.persistence.domain.Status;
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
        transferValidator.validateCallingId(callingId);
        Transfer transfer = transferRepository.save(new Transfer(callingId, Status.TRANSFERRING, null));
        return new TransferCreateResponse(transfer.getId(), true);
    }

    @Override
    public TransferStatusChangeResponse completeTransfer(Long transferId) {
        transferValidator.validateTransferId(transferId);
        transferValidator.validateTransferArrive(transferId);
        Transfer transfer = transferRepository.findById(transferId).get();
        transfer.complete();
        transferRepository.save(transfer);
        return new TransferStatusChangeResponse(true);
    }

    @Override
    public TransferStatusChangeResponse cancelTransfer(Long transferId) {
        transferValidator.validateTransferId(transferId);
        transferValidator.validateTransferArrive(transferId);
        Transfer transfer = transferRepository.findById(transferId).get();
        transfer.cancel();
        transferRepository.save(transfer);
        return new TransferStatusChangeResponse(true);
    }
}
