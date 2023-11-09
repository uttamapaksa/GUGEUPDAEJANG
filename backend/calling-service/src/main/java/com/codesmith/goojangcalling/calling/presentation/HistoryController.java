package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.application.HistoryService;
import com.codesmith.goojangcalling.calling.dto.request.CallingListRequest;
import com.codesmith.goojangcalling.calling.dto.response.*;
import com.codesmith.goojangcalling.global.passport.MemberInfo;
import com.codesmith.goojangcalling.global.passport.presentation.AuthMember;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/calling")
public class HistoryController {
    private final HistoryService historyService;

    @GetMapping
    public ResponseEntity<CallingListResponse> callingList(@AuthMember MemberInfo memberInfo, @ModelAttribute CallingListRequest callingHistoryRequest) {
        return ResponseEntity.ok(historyService.getCallingList(memberInfo.getId(), callingHistoryRequest));
    }

    private static List<CallingItemResponse> generateDummyData() {
        List<CallingItemResponse> dummyDataList = new ArrayList<>();

        for (int i = 1; i <= 5; i++) {
            CallingItemResponse dummyData = new CallingItemResponse((long) i, "AgeGroup" + i, "Gender" + i, "Tags" + i, "Address" + i, "CallingTime" + i, "ReplyTime" + i, "REJECTED", "Ktas" + i);
            dummyDataList.add(dummyData);
        }

        return dummyDataList;
    }
}
