package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;

public interface CallingService {
    void addOccurrence (Long memberId, CallingCreateRequest callingCreateRequest);
}