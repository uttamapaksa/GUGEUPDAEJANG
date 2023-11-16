package com.codesmith.goojangcalling.calling.exception;

public class DuplicateMemberTagException extends RuntimeException {
    public DuplicateMemberTagException(String message) {
        super(message);
    }

    public DuplicateMemberTagException(String message, Throwable cause) {
        super(message, cause);
    }
}