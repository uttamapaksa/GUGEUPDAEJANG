package com.codesmith.goojangtransfer.transfer.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LocationMessageResponse {
    private Long transferId;
    private Double longitude;
    private Double latitude;

    public LocationMessageResponse() {
    }

    public LocationMessageResponse(Long transferId, Double longitude, Double latitude) {
        this.transferId = transferId;
        this.longitude = longitude;
        this.latitude = latitude;
    }

}
