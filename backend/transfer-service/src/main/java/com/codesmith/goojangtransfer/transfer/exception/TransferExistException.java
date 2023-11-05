package com.codesmith.goojangtransfer.transfer.exception;

public class TransferExistException extends RuntimeException {
    public TransferExistException(String message) {
        super(message);
    }

    public TransferExistException(String message, Throwable cause) {
        super(message, cause);
    }
}
