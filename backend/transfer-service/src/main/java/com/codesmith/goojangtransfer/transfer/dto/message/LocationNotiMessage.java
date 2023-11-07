package com.codesmith.goojangtransfer.transfer.dto.message;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LocationNotiMessage {
    private Long transferId;
    private String status;
    private Double longitude;
    private Double latitude;
    private String address;
    private Integer time;
    private Double distance;
}
