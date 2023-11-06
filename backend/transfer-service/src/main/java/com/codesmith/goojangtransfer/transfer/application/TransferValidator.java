package com.codesmith.goojangtransfer.transfer.application;

import com.codesmith.goojangtransfer.transfer.exception.TransferAlreadyArrivedException;
import com.codesmith.goojangtransfer.transfer.exception.TransferDuplicateException;
import com.codesmith.goojangtransfer.transfer.exception.TransferNotFoundException;
import com.codesmith.goojangtransfer.transfer.persistence.TransferRepository;
import com.codesmith.goojangtransfer.transfer.persistence.domain.Status;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TransferValidator {
    private final TransferRepository transferRepository;

    public void validateCallingId(Long callingId) {
        if (transferRepository.findByCallingId(callingId) != null) {
            throw new TransferDuplicateException("이미 이송 중인 요청");
        }
    }

    public void validateTransferId(Long transferId) {
        if (!transferRepository.existsById(transferId)) {
            throw new TransferNotFoundException("없는 이송 정보");
        }
    }

    public void validateTransferArrive(Long transferId) {
        if (transferRepository.findById(transferId).get().getStatus() == Status.COMPLETE) {
            throw new TransferAlreadyArrivedException("이미 도착 완료된 이송 정보");
        }
    }
}
