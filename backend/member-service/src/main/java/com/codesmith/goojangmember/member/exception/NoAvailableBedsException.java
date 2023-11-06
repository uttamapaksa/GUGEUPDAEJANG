package com.codesmith.goojangmember.member.exception;

public class NoAvailableBedsException extends RuntimeException {
    public NoAvailableBedsException(String message) {
        super(message);
    }

    public NoAvailableBedsException(String message, Throwable cause) {
        super(message, cause);
    }
}
