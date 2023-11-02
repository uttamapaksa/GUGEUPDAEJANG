package com.codesmith.goojangcalling.calling.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CallingCreateRequest {
    private Long occurrenceId;
    private Double distance;
}
