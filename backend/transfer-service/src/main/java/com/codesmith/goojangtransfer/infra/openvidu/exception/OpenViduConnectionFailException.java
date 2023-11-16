package com.codesmith.goojangtransfer.infra.openvidu.exception;

public class OpenViduConnectionFailException extends RuntimeException {
    public OpenViduConnectionFailException(String message) {
        super(message);
    }

    public OpenViduConnectionFailException(String message, Throwable cause) {
        super(message, cause);
    }
}