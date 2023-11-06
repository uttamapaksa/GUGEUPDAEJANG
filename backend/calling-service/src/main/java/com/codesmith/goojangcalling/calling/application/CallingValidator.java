package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.exception.CallingNotFoundException;
import com.codesmith.goojangcalling.calling.exception.CallingStatusNotApprovedException;
import com.codesmith.goojangcalling.calling.exception.IrrevocableStatusException;
import com.codesmith.goojangcalling.calling.persistence.CallingRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.Calling;
import com.codesmith.goojangcalling.calling.persistence.domain.Status;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CallingValidator {
    private final CallingRepository callingRepository;

    public void validateCalling(Long callingId) {
        if (!callingRepository.existsById(callingId)) {
            throw new CallingNotFoundException("요청을 찾을 수 없습니다.");
        }
    }

    public void validateApprovedCalling(Calling calling) {
        if (!calling.getStatus().equals(Status.APPROVED)) {
            throw new CallingStatusNotApprovedException("해당 요청은 병원이 승인하지 않았습니다.");
        }
    }

    public void validateApprovedOrPendingCalling(Calling calling) {
        if (!calling.getStatus().equals(Status.APPROVED) && !calling.getStatus().equals(Status.PENDING)) {
            throw new IrrevocableStatusException("해당 요청은 취소할 수 없습니다.");
        }
    }
}