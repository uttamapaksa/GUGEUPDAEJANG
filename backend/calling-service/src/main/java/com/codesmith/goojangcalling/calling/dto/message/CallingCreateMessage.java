package com.codesmith.goojangcalling.calling.dto.message;

import com.codesmith.goojangcalling.calling.dto.response.CallingStatusResponse;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CallingCreateMessage {
    private Long id;
    private LocalDateTime createdAt;

    private Long occurrenceId;
    private Long memberId;
    private KTAS ktas;
    private AgeGroup ageGroup;
    private Gender gender;
    private String description;
    private Double latitude;
    private Double longitude;
    private String address;
    private List<String> tags;
    private List<String> files;

    private Double distance;
    private Long duration;

    public CallingCreateMessage(Occurrence occurrence, CallingStatusResponse callingStatusResponse, List<String> tags, List<String> files) {
        this.id = callingStatusResponse.getCallingId();
        this.createdAt = callingStatusResponse.getCallingTime();
        this.occurrenceId = occurrence.getId();
        this.memberId = occurrence.getMemberId();
        this.ktas = occurrence.getKtas();
        this.ageGroup = occurrence.getAgeGroup();
        this.gender = occurrence.getGender();
        this.description = occurrence.getSymptom();
        this.latitude = occurrence.getLatitude();
        this.longitude = occurrence.getLongitude();
        this.address = occurrence.getAddress();
        this.tags = tags;
        this.files = files;
        this.distance = callingStatusResponse.getDistance();
        this.duration = callingStatusResponse.getDuration();
    }
}
