package com.codesmith.goojangtransfer.infra.openvidu.exception;

public class OpenViduSessionNotFoundException extends RuntimeException {
    public OpenViduSessionNotFoundException(String message) {
        super(message);
    }

    public OpenViduSessionNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}