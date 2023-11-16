package com.codesmith.goojangcalling.calling.dto.request;

import com.codesmith.goojangcalling.calling.persistence.domain.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CallingStatusChangeRequest {
    private Long callingId;
    private Status status;
    private String reason;
}