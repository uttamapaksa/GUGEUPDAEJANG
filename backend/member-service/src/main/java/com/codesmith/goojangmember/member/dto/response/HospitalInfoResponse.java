package com.codesmith.goojangmember.member.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class HospitalInfoResponse {
    private String name;
    private String telephone1;
    private String telephone2;
    private String address;
    private Double latitude;
    private Double longitude;
}
