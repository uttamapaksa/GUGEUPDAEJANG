package com.codesmith.goojangcalling.calling.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UploadResponse {
    private String uploadUrl;

    public UploadResponse(String uploadUrl) {
        this.uploadUrl = uploadUrl;
    }
}