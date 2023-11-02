package com.codesmith.goojangmember.member.dto.response;

import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import lombok.Getter;

@Getter
public class HospitalListResponse {
    private Long id;
    private String hospitalId;
    private String name;
    private String address;
    private String telephone1;
    private String telephone2;
    private Double latitude;
    private Double longitude;
    private Long bedCount;
    private Double distance;
    private Long time;

    public HospitalListResponse(HospitalDetail hospitalDetail, Long bedCount, Double distance, Long time) {
        this.id = hospitalDetail.getMember().getId();
        this.hospitalId = hospitalDetail.getId();
        this.name = hospitalDetail.getMember().getName();
        this.address = hospitalDetail.getAddress();
        this.telephone1 = hospitalDetail.getTelephone1();
        this.telephone2 = hospitalDetail.getTelephone2();
        this.latitude = hospitalDetail.getLatitude();
        this.longitude = hospitalDetail.getLongitude();
        this.bedCount = bedCount;
        this.distance = distance;
        this.time = time;
    }
}
