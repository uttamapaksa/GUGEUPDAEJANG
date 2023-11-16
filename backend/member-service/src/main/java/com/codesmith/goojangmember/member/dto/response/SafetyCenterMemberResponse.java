package com.codesmith.goojangmember.member.dto.response;

import com.codesmith.goojangmember.member.persistence.domain.ParamedicDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class SafetyCenterMemberResponse {
    private Long memberId;
    private String name;

    public SafetyCenterMemberResponse(ParamedicDetail paramedicDetail) {
        this.memberId = paramedicDetail.getMember().getId();
        this.name = paramedicDetail.getMember().getName();
    }
}
