package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.FilterValue;
import com.codesmith.goojangcalling.calling.dto.SortInfo;
import com.codesmith.goojangcalling.calling.dto.response.HistoryListResponse;

import java.util.List;

public interface CallingRepositorySupport {
    List<HistoryListResponse> findAllCallingByOptions(int skip, int limit, SortInfo sortInfo, FilterValue filterValue);
}
