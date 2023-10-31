package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingRequest;

public interface CallingService {
    void addOccurrence (Long memberId, CallingRequest callingRequest);
}