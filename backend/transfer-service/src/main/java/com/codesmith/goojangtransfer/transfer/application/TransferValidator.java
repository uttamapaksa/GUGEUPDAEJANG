package com.codesmith.goojangtransfer.transfer.application;

import com.codesmith.goojangtransfer.transfer.persistence.TransferRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TransferValidator {
    private final TransferRepository transferRepository;

    public void validateTransferId(Long transferId) {
        if (!transferRepository.existsById(transferId)) {
            throw new RuntimeException("없는 이송 정보");
        }
    }

}
