package com.codesmith.goojangmember.member.dto.response;

import com.codesmith.goojangmember.member.persistence.domain.ParamedicDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class SafetyCenterMemberResponse {
    private Long id;
    private String name;

    public SafetyCenterMemberResponse(ParamedicDetail paramedicDetail) {
        this.id = paramedicDetail.getId();
        this.name = paramedicDetail.getMember().getName();
    }
}
