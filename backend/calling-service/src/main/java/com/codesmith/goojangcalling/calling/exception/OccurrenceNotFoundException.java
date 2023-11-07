package com.codesmith.goojangcalling.calling.exception;

public class OccurrenceNotFoundException extends RuntimeException {
    public OccurrenceNotFoundException(String message) {
        super(message);
    }

    public OccurrenceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}