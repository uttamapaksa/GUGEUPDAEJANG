package com.codesmith.goojangcalling.calling.dto.response;

import com.codesmith.goojangcalling.calling.persistence.domain.Calling;
import com.codesmith.goojangcalling.calling.persistence.domain.Status;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class CallingStatusResponse {
    private Long callingId;
    private LocalDateTime callingTime;
    private Status status;
    private String reason;

    private Long memberId;
    private String hospitalName;
    private String telephone;
    private Double distance;
    private Long duration;

    public CallingStatusResponse(Calling calling, HospitalSearchResponse hospitalSearchResponse) {
        this.callingId = calling.getId();
        this.callingTime = calling.getCreatedAt();
        this.status = calling.getStatus();
        this.reason = calling.getReason();
        this.memberId = hospitalSearchResponse.getId();
        this.hospitalName = hospitalSearchResponse.getName();
        this.telephone = hospitalSearchResponse.getTelephone1();
        this.distance = hospitalSearchResponse.getDistance();
        this.duration = hospitalSearchResponse.getTime();
    }
}
