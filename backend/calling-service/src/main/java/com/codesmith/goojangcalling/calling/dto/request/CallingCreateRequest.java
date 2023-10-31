package com.codesmith.goojangcalling.calling.dto.request;

import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import com.codesmith.goojangcalling.calling.persistence.domain.AgeGroup;
import com.codesmith.goojangcalling.calling.persistence.domain.Gender;
import com.codesmith.goojangcalling.calling.persistence.domain.KTAS;
import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CallingCreateRequest {
    private KTAS ktas;
    private AgeGroup ageGroup;
    private Gender gender;
    private String symptom;
    private Double latitude;
    private Double longitude;
    private List<Tag> tags;
    private List<FileUploadResponse> files;
}