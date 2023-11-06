package com.codesmith.goojangcalling.calling.exception;

public class IrrevocableStatusException extends RuntimeException {
    public IrrevocableStatusException(String message) {
        super(message);
    }

    public IrrevocableStatusException(String message, Throwable cause) {
        super(message, cause);
    }
}