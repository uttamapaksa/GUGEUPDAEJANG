package com.codesmith.goojangtransfer.transfer.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransferCreateRequest {
    private Long callingId;
    private Long memberId;
}
