package com.codesmith.goojangcalling.calling.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransferListResponse {
    private Long id;
    private Long callingId;
    private Long memberId;
}