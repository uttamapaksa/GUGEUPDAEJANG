package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.application.HistoryService;
import com.codesmith.goojangcalling.calling.dto.request.CallingListRequest;
import com.codesmith.goojangcalling.calling.dto.response.*;
import com.codesmith.goojangcalling.global.passport.MemberInfo;
import com.codesmith.goojangcalling.global.passport.presentation.AuthMember;
import com.codesmith.goojangcalling.infra.ncp.NaverCloudClient;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Date;
import java.util.Objects;

@RestController
@RequiredArgsConstructor
@RequestMapping("/calling")
public class HistoryController {
    private final HistoryService historyService;

    @GetMapping
    public ResponseEntity<CallingListResponse> callingList(@AuthMember MemberInfo memberInfo, @ModelAttribute CallingListRequest callingHistoryRequest) {
        return ResponseEntity.ok(historyService.getCallingList(memberInfo.getId(), callingHistoryRequest));
    }

    @PostMapping("/stt")
    public ResponseEntity<MediaTextResponse> mediaToText(@RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(historyService.getTextByFile(file));
    }
}