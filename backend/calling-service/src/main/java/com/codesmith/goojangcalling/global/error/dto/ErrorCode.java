package com.codesmith.goojangcalling.global.error.dto;

public enum ErrorCode {
    INVALID_TAG("C2001"),
    INVALID_MEMBER_TAG("C2002"),
    DUPLICATE_MEMBER_TAG("C2003"),
    FILE_UPLOAD_FAIL("C2011"),
    INVALID_CALLING("C2021"),
    INVALID_CALLING_STATUS("C2031");


    private final String value;

    ErrorCode(String value) {
        this.value = value;
    }

    public String  getValue() {
        return value;
    }
}