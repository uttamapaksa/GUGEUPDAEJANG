package com.codesmith.goojangcalling.calling.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FileUploadResponse {
    private String uploadUrl;

    public FileUploadResponse(String uploadUrl) {
        this.uploadUrl = uploadUrl;
    }
}