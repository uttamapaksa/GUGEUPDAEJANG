package com.codesmith.goojangcalling.infra.aws.exception;

public class FileUploadFailedException extends RuntimeException {

    public FileUploadFailedException(String message) {
        super(message);
    }

    public FileUploadFailedException(String message, Throwable cause) {
        super(message, cause);
    }
}