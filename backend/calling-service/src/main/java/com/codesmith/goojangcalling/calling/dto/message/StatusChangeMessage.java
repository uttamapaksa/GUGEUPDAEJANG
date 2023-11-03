package com.codesmith.goojangcalling.calling.dto.message;

import com.codesmith.goojangcalling.calling.persistence.domain.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StatusChangeMessage {
    private Long memberId;
    private Long CallingId;
    private Status status;
    private String reason;
}