package com.codesmith.goojangmember.member.exception;

public class NotParamedicMemberException extends RuntimeException {
    public NotParamedicMemberException(String message) {
        super(message);
    }

    public NotParamedicMemberException(String message, Throwable cause) {
        super(message, cause);
    }
}
