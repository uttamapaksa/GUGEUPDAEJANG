package com.codesmith.goojangcalling.calling.dto.message;

import com.codesmith.goojangcalling.calling.persistence.domain.Calling;
import com.codesmith.goojangcalling.calling.persistence.domain.Status;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CallingTerminateMessage {
    private Long callingId;
    private Status status;

    public CallingTerminateMessage(Calling calling) {
        this.callingId = calling.getId();
        this.status = calling.getStatus();
    }
}