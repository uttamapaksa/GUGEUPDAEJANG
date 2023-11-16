package com.codesmith.goojangmember.global.passport.exception;

public class InvalidPassportException extends RuntimeException {
    public InvalidPassportException(String message) {
        super(message);
    }

    public InvalidPassportException(String message, Throwable cause) {
        super(message, cause);
    }
}