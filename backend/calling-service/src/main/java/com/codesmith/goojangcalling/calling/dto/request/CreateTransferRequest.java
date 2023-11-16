package com.codesmith.goojangcalling.calling.dto.request;

import com.codesmith.goojangcalling.calling.persistence.domain.Calling;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CreateTransferRequest {
    private Long callingId;
    private Long memberId;

    public CreateTransferRequest(Calling calling) {
        this.callingId = calling.getId();
        this.memberId = calling.getMemberId();
    }
}