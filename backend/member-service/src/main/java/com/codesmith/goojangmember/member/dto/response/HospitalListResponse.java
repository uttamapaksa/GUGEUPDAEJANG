package com.codesmith.goojangmember.member.dto.response;

import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import lombok.Getter;

@Getter
public class HospitalListResponse {
    private String hospitalId;
    private String name;
    private String address;
    private String telephone1;
    private String telephone2;
    private Long bedCount;

public HospitalListResponse(HospitalDetail hospitalDetail, Long bedCount) {
        this.hospitalId = hospitalDetail.getId();
        this.name = hospitalDetail.getMember().getName();
        this.address = hospitalDetail.getAddress();
        this.telephone1 = hospitalDetail.getTelephone1();
        this.telephone2 = hospitalDetail.getTelephone2();
        this.bedCount = bedCount;
    }
}
