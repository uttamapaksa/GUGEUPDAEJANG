package com.codesmith.goojangtransfer.global.error.dto;

public enum ErrorCode {
    NO_TRANSFER("T1001"),
    ALREADY_ARRIVED("T1002"),
    TRANSFER_DUPLICATE("T1003"),
    OPENVIDU_SESSION_FAIL("T1011"),
    OPENVIDU_CONNECTION_FAIL("T1012"),
    OPENVIDU_SESSION_NOT_FOUND("T1013"),;

    private final String value;

    ErrorCode(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}