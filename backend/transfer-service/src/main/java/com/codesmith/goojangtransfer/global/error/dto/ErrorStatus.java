package com.codesmith.goojangtransfer.global.error.dto;

public enum ErrorStatus {
    NOT_FOUND(404);

    private final int value;

    ErrorStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
