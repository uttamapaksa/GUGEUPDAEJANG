package com.codesmith.goojangcalling.calling.exception;

public class CallingNotFoundException extends RuntimeException {
    public CallingNotFoundException(String message) {
        super(message);
    }

    public CallingNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}