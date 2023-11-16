package com.codesmith.goojangtransfer.transfer.dto.message;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LocationNotiMessage {
    private Long id;
    private String state;
    private Double curLon;
    private Double curLat;
    private String curAddr;
    private boolean videoOn;
    private Long transferId;
}
