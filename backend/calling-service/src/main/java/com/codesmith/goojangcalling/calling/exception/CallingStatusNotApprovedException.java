package com.codesmith.goojangcalling.calling.exception;

public class CallingStatusNotApprovedException extends RuntimeException{
    public CallingStatusNotApprovedException(String message) {
        super(message);
    }

    public CallingStatusNotApprovedException(String message, Throwable cause) {
        super(message, cause);
    }
}