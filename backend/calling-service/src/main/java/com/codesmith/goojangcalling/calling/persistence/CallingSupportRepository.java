package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.FilterValue;
import com.codesmith.goojangcalling.calling.dto.SortInfo;
import com.codesmith.goojangcalling.calling.persistence.domain.CallingItem;

import java.util.List;

public interface CallingSupportRepository {
    List<CallingItem> findAllCallingByOptions(Long memberId, int skip, int limit, SortInfo sortInfo, FilterValue[] filterValues);
    Long countCallingByOptions(Long memberId, FilterValue[] filterValues);
}
