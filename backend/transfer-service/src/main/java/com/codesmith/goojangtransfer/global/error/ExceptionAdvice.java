package com.codesmith.goojangtransfer.global.error;

import com.codesmith.goojangtransfer.global.error.dto.ErrorCode;
import com.codesmith.goojangtransfer.global.error.dto.ErrorResponse;
import com.codesmith.goojangtransfer.global.error.dto.ErrorStatus;
import com.codesmith.goojangtransfer.infra.openvidu.exception.OpenViduConnectionFailException;
import com.codesmith.goojangtransfer.infra.openvidu.exception.OpenViduCreateFailException;
import com.codesmith.goojangtransfer.infra.openvidu.exception.OpenViduSessionNotFoundException;
import com.codesmith.goojangtransfer.transfer.exception.TransferAlreadyArrivedException;
import com.codesmith.goojangtransfer.transfer.exception.TransferDuplicateException;
import com.codesmith.goojangtransfer.transfer.exception.TransferNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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

    @ExceptionHandler({TransferDuplicateException.class})
    public ResponseEntity<ErrorResponse> duplicateTransfer() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.TRANSFER_DUPLICATE, "이미 존재하는 이송 정보입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.BAD_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({OpenViduCreateFailException.class})
    public ResponseEntity<ErrorResponse> failCreateOpenVidu() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.OPENVIDU_SESSION_FAIL, "오픈비두 세션 생성에 실패했습니다.");
        return ResponseEntity.status(HttpStatusCode.valueOf(ErrorStatus.BAD_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({OpenViduConnectionFailException.class})
    public ResponseEntity<ErrorResponse> failConnectionOpenVidu() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.OPENVIDU_CONNECTION_FAIL, "접속에 실패했습니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.BAD_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({OpenViduSessionNotFoundException.class})
    public ResponseEntity<ErrorResponse> sessionNotFound() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.OPENVIDU_SESSION_NOT_FOUND, "세션이 존재하지 않습니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.NOT_FOUND.getValue())).body(errorResponse);
    }
}