package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.message.StatusChangeMessage;
import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.request.OccurrenceCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.CallingStatusResponse;
import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import com.codesmith.goojangcalling.calling.dto.response.OccurrenceCreateResponse;
import com.codesmith.goojangcalling.calling.dto.response.HospitalSearchResponse;
import org.springframework.web.multipart.MultipartFile;
import reactor.core.publisher.Mono;

import java.util.List;

public interface CallingService {
    OccurrenceCreateResponse addOccurrence (Long memberId, OccurrenceCreateRequest occurrenceCreateRequest);

    Mono<List<HospitalSearchResponse>> searchHospital(Double latitude, Double longitude, Double distance);

    List<CallingStatusResponse> addCalling(Long memberId, CallingCreateRequest callingCreateRequest);

    void createCallingMessage(List<CallingStatusResponse> callingStatusResponseList, Long occurrenceId);

    List<FileUploadResponse> fileUpload(List<MultipartFile> files);

    void changeCallingStatus(Long memberId, StatusChangeMessage changeMessage);
}