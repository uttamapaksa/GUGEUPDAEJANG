package com.codesmith.goojangcalling.calling.dto.response;

import com.codesmith.goojangcalling.calling.persistence.domain.Calling;
import com.codesmith.goojangcalling.calling.persistence.domain.Status;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CallingStatusResponse {
    private Long callingId;
    private String callingTime;
    private Status status;
    private String reason;

    private Long memberId;
    private String hospitalName;
    private String telephone;
    private Double latitude;
    private Double longitude;
    private Double distance;
    private Long duration;

    public CallingStatusResponse(Calling calling, HospitalSearchResponse hospitalSearchResponse) {
        this.callingId = calling.getId();
        this.callingTime = calling.getCreatedAt().toString();
        this.status = calling.getStatus();
        this.reason = calling.getReason();
        this.memberId = hospitalSearchResponse.getId();
        this.hospitalName = hospitalSearchResponse.getName();
        this.telephone = hospitalSearchResponse.getTelephone1();
        this.latitude = hospitalSearchResponse.getLatitude();
        this.longitude = hospitalSearchResponse.getLongitude();
        this.distance = hospitalSearchResponse.getDistance();
        this.duration = hospitalSearchResponse.getTime();
    }
}
