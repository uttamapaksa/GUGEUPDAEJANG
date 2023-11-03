package com.codesmith.goojangcalling.global.error.dto;

public enum ErrorCode {
    WRONG_TAG("C2001"),
    WRONG_MEMBER_TAG("C2002"),
    EXISTS_MEMBER_TAG("C2003"),
    FILE_UPLOAD_FAIL("C2011"),
    WRONG_CALLING("C2021");


    private final String value;

    ErrorCode(String value) {
        this.value = value;
    }

    public String  getValue() {
        return value;
    }
}