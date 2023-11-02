package com.codesmith.goojangtransfer.transfer.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LocationMessageRequest {
    private Long transferId;
    private Double longitude;
    private Double latitude;
}
