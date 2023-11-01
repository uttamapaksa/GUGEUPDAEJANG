package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.HospitalSearchResponse;
import reactor.core.publisher.Mono;

import java.util.List;

public interface CallingService {
    void addOccurrence (Long memberId, CallingCreateRequest callingCreateRequest);

    Mono<List<HospitalSearchResponse>> searchHospital(Double latitude, Double longitude, Double distance);
}