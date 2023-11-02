package com.codesmith.goojangmember.member.dto.response;

import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CenterListResponse {
    private Long id;
    private String region;
    private String name;
    private String address;
    private String telephone;
}
