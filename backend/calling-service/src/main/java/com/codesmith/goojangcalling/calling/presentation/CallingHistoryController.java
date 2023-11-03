package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.application.CallingService;
import com.codesmith.goojangcalling.calling.application.MemberTagService;
import com.codesmith.goojangcalling.calling.dto.request.AddMemberTagRequest;
import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.request.OccurrenceCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.*;
import com.codesmith.goojangcalling.global.passport.MemberInfo;
import com.codesmith.goojangcalling.global.passport.presentation.AuthMember;
import com.codesmith.goojangcalling.infra.aws.S3Client;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/calling")
public class CallingHistoryController {
    private final MemberTagService memberTagService;
    private final CallingService callingService;

    @GetMapping("/history")
    public ResponseEntity<List<HistoryListResponse>> historyList() {
        System.out.println("========================================== in history");
        return ResponseEntity.ok(createSampleList());
    }

    public static List<HistoryListResponse> createSampleList() {
        List<HistoryListResponse> list = new ArrayList<>();

        list.add(new HistoryListResponse(1L, "영희", "김", "younghee.kim@example.com"));
        list.add(new HistoryListResponse(2L, "철수", "이", "cheolsu.lee@example.com"));
        list.add(new HistoryListResponse(3L, "민준", "박", "minjun.park@example.com"));
        list.add(new HistoryListResponse(4L, "지아", "최", "jia.choi@example.com"));
        list.add(new HistoryListResponse(5L, "수민", "정", "sumin.jung@example.com"));
        list.add(new HistoryListResponse(6L, "하은", "강", "haeun.kang@example.com"));
        list.add(new HistoryListResponse(7L, "재현", "조", "jaehyun.jo@example.com"));
        list.add(new HistoryListResponse(8L, "서영", "윤", "seoyoung.yoon@example.com"));
        list.add(new HistoryListResponse(9L, "준서", "임", "junseo.lim@example.com"));
        list.add(new HistoryListResponse(10L, "유진", "오", "yujin.oh@example.com"));

        return list;
    }
}
