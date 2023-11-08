package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingListRequest;
import com.codesmith.goojangcalling.calling.dto.response.CallingListResponse;

import java.util.List;

public interface HistoryService {
    List<CallingListResponse> getCallingList(CallingListRequest callingHistoryRequest);
}
