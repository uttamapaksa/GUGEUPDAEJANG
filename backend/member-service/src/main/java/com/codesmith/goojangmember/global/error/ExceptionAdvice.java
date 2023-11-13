package com.codesmith.goojangmember.global.error;

import com.codesmith.goojangmember.auth.exception.InvalidLoginException;
import com.codesmith.goojangmember.auth.exception.InvalidTokenException;
import com.codesmith.goojangmember.global.error.dto.ErrorCode;
import com.codesmith.goojangmember.global.error.dto.ErrorResponse;
import com.codesmith.goojangmember.global.error.dto.ErrorStatus;
import com.codesmith.goojangmember.member.exception.MemberNotFoundException;
import com.codesmith.goojangmember.member.exception.NotHospitalMemberException;
import com.codesmith.goojangmember.member.exception.NotParamedicMemberException;
import com.codesmith.goojangmember.member.exception.SafetyCenterNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler({MemberNotFoundException.class})
    public ResponseEntity<ErrorResponse> noMember() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.MEMBER_NOT_FOUND, "존재하지 않는 회원입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.NOT_FOUND.getValue())).body(errorResponse);
    }

    @ExceptionHandler({NotHospitalMemberException.class})
    public ResponseEntity<ErrorResponse> notHospitalRole() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.NOT_HOSPITAL_MEMBER, "병원 회원이 아닙니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.BAD_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({NotParamedicMemberException.class})
    public ResponseEntity<ErrorResponse> notParamedicRole() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.NOT_PARAMEDIC_MEMBER, "구급대원 회원이 아닙니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.BAD_REQUEST.getValue())).body(errorResponse);
    }

    @ExceptionHandler({SafetyCenterNotFoundException.class})
    public ResponseEntity<ErrorResponse> noSafetyCenter() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.SAFETY_CENTER_NOT_FOUND, "존재하지 않는 안전센터입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.NOT_FOUND.getValue())).body(errorResponse);
    }

    @ExceptionHandler({InvalidLoginException.class})
    public ResponseEntity<ErrorResponse> invalidLogin() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.INVALID_LOGIN_INFO, "로그인 정보가 올바르지 않습니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.UNAUTHORIZED.getValue())).body(errorResponse);
    }

    @ExceptionHandler({InvalidTokenException.class})
    public ResponseEntity<ErrorResponse> invalidToken() {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.INVALID_TOKEN, "유효하지 않은 토큰입니다.");
        return ResponseEntity.status(HttpStatus.valueOf(ErrorStatus.UNAUTHORIZED.getValue())).body(errorResponse);
    }

}