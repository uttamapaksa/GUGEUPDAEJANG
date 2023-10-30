package com.codesmith.goojangmember.member.exception;

public class NoNearByHospitalException extends RuntimeException {
    public NoNearByHospitalException(String message) {
        super(message);
    }

    public NoNearByHospitalException(String message, Throwable cause) {
        super(message, cause);
    }
}