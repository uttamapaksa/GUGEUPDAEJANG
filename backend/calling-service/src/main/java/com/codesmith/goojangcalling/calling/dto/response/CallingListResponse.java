package com.codesmith.goojangcalling.calling.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class CallingListResponse {
    private List<CallingItemResponse> callings;
    private Long totalCount;
}