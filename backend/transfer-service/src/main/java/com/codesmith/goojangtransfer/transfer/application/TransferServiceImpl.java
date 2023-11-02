package com.codesmith.goojangtransfer.transfer.application;

import com.codesmith.goojangtransfer.transfer.dto.response.CreateTransferResponse;
import com.codesmith.goojangtransfer.transfer.persistence.TransferRepository;
import com.codesmith.goojangtransfer.transfer.persistence.domain.Transfer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TransferServiceImpl implements TransferService {

    private final TransferRepository transferRepository;

    @Override
    public CreateTransferResponse createTransfer(Long callingId) {
        Transfer transfer = transferRepository.save(new Transfer(callingId, false, null));
        return new CreateTransferResponse(transfer.getId(), true);
    }
}
