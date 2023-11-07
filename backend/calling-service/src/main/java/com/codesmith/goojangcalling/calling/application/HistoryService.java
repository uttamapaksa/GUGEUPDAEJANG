package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingHistoryRequest;
import com.codesmith.goojangcalling.calling.dto.response.HistoryListResponse;

import java.util.List;

public interface HistoryService {
    List<HistoryListResponse> getCallingList(CallingHistoryRequest callingHistoryRequest);
}
