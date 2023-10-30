package com.codesmith.goojangmember.infra.publicdata.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class HospitalInfoItem {
    @JsonProperty("hpid")
    private String hpId;

    @JsonProperty("hvec")
    private Long bedCount;
}
