package com.codesmith.goojangmember.member.exception;

public class NotHospitalMemberException extends RuntimeException {
    public NotHospitalMemberException(String message) {
        super(message);
    }

    public NotHospitalMemberException(String message, Throwable cause) {
        super(message, cause);
    }
}
