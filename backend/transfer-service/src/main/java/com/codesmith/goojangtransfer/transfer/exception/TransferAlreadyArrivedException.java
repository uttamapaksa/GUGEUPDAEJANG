package com.codesmith.goojangtransfer.transfer.exception;

public class TransferAlreadyArrivedException extends RuntimeException {
    public TransferAlreadyArrivedException(String message) {
        super(message);
    }

    public TransferAlreadyArrivedException(String message, Throwable cause) {
        super(message, cause);
    }

}
