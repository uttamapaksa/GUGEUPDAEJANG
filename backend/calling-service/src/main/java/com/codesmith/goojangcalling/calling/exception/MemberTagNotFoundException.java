package com.codesmith.goojangcalling.calling.exception;

public class MemberTagNotFoundException extends RuntimeException {
    public MemberTagNotFoundException(String message) {
        super(message);
    }

    public MemberTagNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}