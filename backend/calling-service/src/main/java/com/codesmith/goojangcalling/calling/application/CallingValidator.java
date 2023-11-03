package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.exception.CallingNotFoundException;
import com.codesmith.goojangcalling.calling.persistence.CallingRepository;
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
}