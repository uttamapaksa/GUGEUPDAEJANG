package com.codesmith.goojangtransfer.transfer.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TransferListResponse {
    private Long id;
    private Long callingId;
    private Long memberId;
    private String status;
    private LocalDateTime arrivedAt;
}
