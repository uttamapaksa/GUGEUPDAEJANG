package com.codesmith.goojangtransfer.global.error;

import com.codesmith.goojangtransfer.global.error.dto.ErrorCode;
import com.codesmith.goojangtransfer.global.error.dto.ErrorResponse;
import com.codesmith.goojangtransfer.global.error.dto.ErrorStatus;
import com.codesmith.goojangtransfer.transfer.exception.TransferAlreadyArrivedException;
import com.codesmith.goojangtransfer.transfer.exception.TransferNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler({TransferNotFoundException.class})
    public ResponseEntity<ErrorResponse> noTransfer() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.NO_TRANSFER, "이송 정보가 존재하지 않습니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.NOT_FOUND.getValue())).body(errorResponse);
    }

    @ExceptionHandler({TransferAlreadyArrivedException.class})
    public ResponseEntity<ErrorResponse> alreadyArrived() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.ALREADY_ARRIVED, "이미 도착 완료된 이송 정보입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.BAD_REQUEST.getValue())).body(errorResponse);
    }
}