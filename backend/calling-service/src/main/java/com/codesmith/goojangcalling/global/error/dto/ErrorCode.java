package com.codesmith.goojangcalling.global.error.dto;

public enum ErrorCode {
    WRONG_TAG(1001),
    WRONG_MEMBER_TAG(1002),
    EXISTS_MEMBER_TAG(1003);

    private final int value;

    ErrorCode(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}