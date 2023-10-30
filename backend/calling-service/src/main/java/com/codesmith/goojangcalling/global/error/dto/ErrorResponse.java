package com.codesmith.goojangcalling.global.error.dto;

import lombok.Getter;

@Getter
public class ErrorResponse {
    private int errorCode;
    private String message;

    public ErrorResponse(ErrorCode errorCode, String message) {
        this.errorCode = errorCode.getValue();
        this.message = message;
    }
}