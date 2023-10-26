package com.codesmith.goojangcalling.calling.dto.response;

import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberTagResponse {
    private Tag tag;

    public MemberTagResponse(Tag tag) {
        this.tag = tag;
    }
}