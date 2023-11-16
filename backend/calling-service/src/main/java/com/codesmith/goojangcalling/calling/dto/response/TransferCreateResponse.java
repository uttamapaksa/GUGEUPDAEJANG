package com.codesmith.goojangcalling.calling.dto.response;

import com.codesmith.goojangcalling.calling.persistence.domain.AgeGroup;
import com.codesmith.goojangcalling.calling.persistence.domain.Gender;
import com.codesmith.goojangcalling.calling.persistence.domain.Occurrence;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransferCreateResponse {
    private Long transferId;
    private Long memberId;
    private String name;
    private Gender gender;
    private AgeGroup ageGroup;
    private String description;

    public void setInfo(Occurrence occurrence, String name, Long memberId) {
        this.memberId = memberId;
        this.gender = occurrence.getGender();
        this.ageGroup = occurrence.getAgeGroup();
        this.description = occurrence.getSymptom();
        this.name = name;
    }
}