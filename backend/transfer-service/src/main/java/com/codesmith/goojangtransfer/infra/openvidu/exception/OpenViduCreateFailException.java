package com.codesmith.goojangtransfer.infra.openvidu.exception;

public class OpenViduCreateFailException extends RuntimeException{
    public OpenViduCreateFailException(String message) {
        super(message);
    }

    public OpenViduCreateFailException(String message, Throwable cause) {
        super(message, cause);
    }
}