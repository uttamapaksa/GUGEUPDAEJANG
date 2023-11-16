package com.codesmith.goojangmember.member.dto.request;

import jakarta.annotation.Nullable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
public class HospitalListRequest {
    private Double latitude;
    private Double longitude;
    private Double distance;
    private List<Long> ids;

    public HospitalListRequest(Double latitude, Double longitude, Double distance, List<Long> ids) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.distance = distance;
        this.ids = ids == null ? List.of(-1L) : ids;
    }
}
