package com.codesmith.goojangcalling.calling.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddMemberTagRequest {
    private String tagName;

    public AddMemberTagRequest() {
    }

    public AddMemberTagRequest(String tagName) {
        this.tagName = tagName;
    }
}
