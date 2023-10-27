package com.codesmith.goojangmember.member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class HospitalJoinRequest {
    private String hospitalId;
    private String email;
    private String password;
    private String name;
    private String imageUrl;
    private String role;
    private String telephone1;
    private String telephone2;
    private String address;
    private double latitude;
    private double longitude;

}
