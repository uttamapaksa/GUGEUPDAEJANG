package com.codesmith.goojangtransfer.global.error.dto;

public enum ErrorCode {
    NO_TRANSFER(1001),
    ALREADY_ARRIVED(1002);

    private final int value;

    ErrorCode(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}