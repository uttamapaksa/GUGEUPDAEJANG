package com.codesmith.goojangtransfer.transfer.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SafetyCenterInfoResponse {
    private List<ParamedicInfoResponse> paramedics;
    private String name;
    private String address;
    private String telephone;
    private String region;
}
