package com.codesmith.goojangmember.member.dto.response;

import com.codesmith.goojangmember.member.persistence.domain.SafetyCenter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class MySafetyCenterInfoResponse {
    private List<SafetyCenterMemberResponse> paramedics;
    private String name;
    private String address;
    private String telephone;
    private String region;

    public MySafetyCenterInfoResponse(List<SafetyCenterMemberResponse> paramedics, SafetyCenter safetyCenter) {
        this.paramedics = paramedics;
        this.name = safetyCenter.getName();
        this.address = safetyCenter.getAddress();
        this.telephone = safetyCenter.getTelephone();
        this.region = safetyCenter.getRegion();
    }
}
