package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.application.CallingService;
import com.codesmith.goojangcalling.calling.application.MemberTagService;
import com.codesmith.goojangcalling.calling.dto.request.AddMemberTagRequest;
import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.request.CallingHistoryRequest;
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
    public ResponseEntity<List<HistoryListResponse>> historyList(@RequestParam CallingHistoryRequest callingHistoryRequest) {
        System.out.println("========================================== in history");
        System.out.println(callingHistoryRequest);
        return ResponseEntity.ok(generateDummyData());
    }

    public static List<HistoryListResponse> generateDummyData() {
        List<HistoryListResponse> dummyDataList = new ArrayList<>();

        for (int i = 1; i <= 5; i++) {
            HistoryListResponse dummyData = new HistoryListResponse((long) i, "AgeGroup" + i, "Gender" + i, "Tags" + i, "Address" + i, "CallingTime" + i, "ReplyTime" + i, "Ktas" + i);
            dummyDataList.add(dummyData);
        }

        return dummyDataList;
    }
}
