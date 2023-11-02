package com.codesmith.goojangtransfer.transfer.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LocationMessageResponse {
    private String name;
    private Double longitude;
    private Double latitude;

    public LocationMessageResponse() {
    }

    public LocationMessageResponse(String name, Double longitude, Double latitude) {
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
    }

}
