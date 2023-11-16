package com.codesmith.goojangcalling.calling.dto.message;

import com.codesmith.goojangcalling.calling.dto.response.CallingStatusResponse;
import com.codesmith.goojangcalling.calling.persistence.domain.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CallingCreateMessage {
    private Long id;
    private String createdAt;

    private Long occurrenceId;
    private String occurrenceTime;
    private Long memberId;
    private Long hospitalId;
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
    private Status status;

    public CallingCreateMessage(Occurrence occurrence, CallingStatusResponse callingStatusResponse, List<String> tags, List<String> files) {
        this.id = callingStatusResponse.getCallingId();
        this.createdAt = callingStatusResponse.getCallingTime().toString();
        this.occurrenceId = occurrence.getId();
        this.occurrenceTime = occurrence.getCreatedAt().toString();
        this.memberId = occurrence.getMemberId();
        this.hospitalId = callingStatusResponse.getMemberId();
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
        this.status = callingStatusResponse.getStatus();
    }
}
