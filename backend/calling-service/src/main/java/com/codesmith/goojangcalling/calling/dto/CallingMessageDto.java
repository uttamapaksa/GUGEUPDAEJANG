package com.codesmith.goojangcalling.calling.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CallingMessageDto {
    private String name;
    private Double longitude;
    private Double latitude;

    public CallingMessageDto() {
    }

    public CallingMessageDto(String name, Double longitude, Double latitude) {
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
    }

}
