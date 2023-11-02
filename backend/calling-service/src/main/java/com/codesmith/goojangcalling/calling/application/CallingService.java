package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.request.OccurrenceCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.CallingStatusResponse;
import com.codesmith.goojangcalling.calling.dto.response.OccurrenceCreateResponse;
import com.codesmith.goojangcalling.calling.dto.response.HospitalSearchResponse;
import reactor.core.publisher.Mono;

import java.util.List;

public interface CallingService {
    OccurrenceCreateResponse addOccurrence (Long memberId, OccurrenceCreateRequest occurrenceCreateRequest);

    Mono<List<HospitalSearchResponse>> searchHospital(Double latitude, Double longitude, Double distance);

    List<CallingStatusResponse> addCalling(Long memberId, CallingCreateRequest callingCreateRequest);

    void createCallingMessage(List<CallingStatusResponse> callingStatusResponseList, Long occurrenceId);
}