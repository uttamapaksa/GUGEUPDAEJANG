package com.codesmith.goojangcalling.calling.exception;

public class DuplicateCallingException extends RuntimeException{
    public DuplicateCallingException(String message) {
        super(message);
    }

    public DuplicateCallingException(String message, Throwable cause) {
        super(message, cause);
    }
}