package com.codesmith.goojangtransfer.transfer.exception;

public class TransferDuplicateException extends RuntimeException {
    public TransferDuplicateException(String message) {
        super(message);
    }

    public TransferDuplicateException(String message, Throwable cause) {
        super(message, cause);
    }
}
