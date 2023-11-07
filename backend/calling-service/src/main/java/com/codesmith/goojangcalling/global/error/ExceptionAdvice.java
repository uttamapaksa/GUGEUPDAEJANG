package com.codesmith.goojangcalling.global.error;

import com.codesmith.goojangcalling.calling.exception.*;
import com.codesmith.goojangcalling.global.error.dto.ErrorCode;
import com.codesmith.goojangcalling.global.error.dto.ErrorStatus;
import com.codesmith.goojangcalling.infra.aws.exception.FileUploadFailedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import com.codesmith.goojangcalling.global.error.dto.ErrorResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler({TagNotFoundException.class})
    public ResponseEntity<ErrorResponse> invalidTag() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.INVALID_TAG, "존재하지 않는 태그입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({MemberTagNotFoundException.class})
    public ResponseEntity<ErrorResponse> invalidMemberTag() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.INVALID_MEMBER_TAG, "존재하지 않는 멤버 테그입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({DuplicateMemberTagException.class})
    public ResponseEntity<ErrorResponse> duplicatedMemberTag() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.DUPLICATE_MEMBER_TAG, "이미 존재하는 태그입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({FileUploadFailedException.class})
    public ResponseEntity<ErrorResponse> fileUploadFail() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.FILE_UPLOAD_FAIL, "업로드에 실패했습니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({CallingNotFoundException.class})
    public ResponseEntity<ErrorResponse> invalidCalling() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.INVALID_CALLING, "잘못된 요청입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({CallingStatusNotApprovedException.class, IrrevocableStatusException.class})
    public ResponseEntity<ErrorResponse> invalidCallingStatus() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.INVALID_CALLING_STATUS, "잘못된 요청 상태입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({OccurrenceNotFoundException.class})
    public ResponseEntity<ErrorResponse> invalidOccurrence() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.INVALID_OCCURRENCE, "유효하지 않은 사고입니다.");
        return ResponseEntity.status(HttpStatusCode.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }
}