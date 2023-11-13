package com.codesmith.goojangmember.global.error.dto;

public enum ErrorStatus {
    NOT_FOUND(404),
    BAD_REQUEST(400),
    UNAUTHORIZED(401),;

    private final int value;

    ErrorStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
