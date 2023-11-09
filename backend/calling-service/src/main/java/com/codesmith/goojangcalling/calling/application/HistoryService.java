package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingListRequest;
import com.codesmith.goojangcalling.calling.dto.response.CallingItemResponse;
import com.codesmith.goojangcalling.calling.dto.response.CallingListResponse;

import java.util.List;

public interface HistoryService {
    CallingListResponse getCallingList(Long memberId, CallingListRequest callingHistoryRequest);
}
