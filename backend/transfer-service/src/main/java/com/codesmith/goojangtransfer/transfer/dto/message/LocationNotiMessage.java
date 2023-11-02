package com.codesmith.goojangtransfer.transfer.dto.message;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LocationNotiMessage {
    private Long transferId;
    private Double longitude;
    private Double latitude;
}
