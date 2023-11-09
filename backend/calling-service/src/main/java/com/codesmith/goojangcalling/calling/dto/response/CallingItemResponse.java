package com.codesmith.goojangcalling.calling.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class CallingItemResponse {
    private Long id;
    private String ageGroup;
    private String gender;
    private String tags;
    private String address;
    private String callingTime;
    private String replyTime;
    private String status;
    private String ktas;
}