package com.codesmith.goojangmember.member.exception;

public class SafetyCenterNotFoundException extends RuntimeException {
    public SafetyCenterNotFoundException(String message) {
        super(message);
    }

    public SafetyCenterNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}