package com.codesmith.goojangcalling.calling.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HospitalSearchResponse {
    private String hospitalId;
    private String name;
    private String address;
    private String telephone1;
    private String telephone2;
    private Long bedCount;
}