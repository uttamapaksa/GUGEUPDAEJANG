package com.codesmith.goojangcalling.calling.dto.response;

import com.codesmith.goojangcalling.calling.persistence.domain.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class TransferHistoryResponse {
    private String address;
    private AgeGroup ageGroup;
    private Gender gender;
    private KTAS ktas;
    private String description;

    private String memberName;

    private List<String> tags;
    private List<String> files;

    private Long callingId;
    private LocalDateTime createdAt;
    private Long hospitalId;

    public TransferHistoryResponse(Occurrence occurrence, String memberName, List<String> tags, List<String> files, Calling calling) {
        this.address = occurrence.getAddress();
        this.ageGroup = occurrence.getAgeGroup();
        this.gender = occurrence.getGender();
        this.ktas = occurrence.getKtas();
        this.description = occurrence.getSymptom();
        this.memberName = memberName;
        this.tags = tags;
        this.files = files;
        this.callingId = calling.getId();
        this.createdAt = calling.getCreatedAt();
        this.hospitalId = calling.getMemberId();
    }
}