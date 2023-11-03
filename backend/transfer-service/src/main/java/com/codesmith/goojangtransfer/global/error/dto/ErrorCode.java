package com.codesmith.goojangtransfer.global.error.dto;

public enum ErrorCode {
    NO_TRANSFER("T1001"),
    ALREADY_ARRIVED("T1002");

    private final String value;

    ErrorCode(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}