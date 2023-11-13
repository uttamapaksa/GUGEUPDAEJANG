package com.codesmith.goojangmember.global.error.dto;

public enum ErrorCode {
    MEMBER_NOT_FOUND("M1001"),
    NOT_HOSPITAL_MEMBER("M1002"),
    NOT_PARAMEDIC_MEMBER("M1003"),
    SAFETY_CENTER_NOT_FOUND("M1004"),
    INVALID_LOGIN_INFO("M1011"),
    INVALID_TOKEN("M1012");

    private final String value;

    ErrorCode(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}