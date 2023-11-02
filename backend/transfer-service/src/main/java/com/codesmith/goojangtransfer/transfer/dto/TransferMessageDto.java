package com.codesmith.goojangtransfer.transfer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TransferMessageDto {
    private String name;
    private Double longitude;
    private Double latitude;

    public TransferMessageDto() {
    }

    public TransferMessageDto(String name, Double longitude, Double latitude) {
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
    }

}
