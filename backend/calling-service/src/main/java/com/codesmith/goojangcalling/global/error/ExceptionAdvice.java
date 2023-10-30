package com.codesmith.goojangcalling.global.error;

import com.codesmith.goojangcalling.calling.exception.DuplicateMemberTagException;
import com.codesmith.goojangcalling.calling.exception.MemberTagNotFoundException;
import com.codesmith.goojangcalling.calling.exception.TagNotFoundException;
import com.codesmith.goojangcalling.global.error.dto.ErrorCode;
import com.codesmith.goojangcalling.global.error.dto.ErrorStatus;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.codesmith.goojangcalling.global.error.dto.ErrorResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler({TagNotFoundException.class})
    public ResponseEntity<ErrorResponse> wrongTag() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.WRONG_TAG, "존재하지 않는 태그입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({MemberTagNotFoundException.class})
    public ResponseEntity<ErrorResponse> wrongMemberTag() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.WRONG_MEMBER_TAG, "존재하지 않는 멤버 테그입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({DuplicateMemberTagException.class})
    public ResponseEntity<ErrorResponse> duplicatedMemberTag() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.EXISTS_MEMBER_TAG, "이미 존재하는 태그입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.INVALID_REQUEST.getValue())).body(errorResponse);
    }
}