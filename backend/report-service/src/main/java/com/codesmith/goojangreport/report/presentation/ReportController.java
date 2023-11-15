package com.codesmith.goojangreport.report.presentation;

import com.codesmith.goojangreport.global.passport.MemberInfo;
import com.codesmith.goojangreport.global.passport.presentation.AuthMember;
import com.codesmith.goojangreport.report.application.ReportService;
import com.codesmith.goojangreport.report.dto.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/report")
public class ReportController {

    private final ReportService reportService;

    @GetMapping("/time")
    public ResponseEntity<CallingPerTimeResponse> getTimeGroupReport(@AuthMember MemberInfo memberInfo) {
        return ResponseEntity.ok(reportService.getTimeGroup(memberInfo.getId()));
    }

    @GetMapping("/status")
    public ResponseEntity<DailyStatusResponse> getDailyStatusReport(@AuthMember MemberInfo memberInfo) {
        return ResponseEntity.ok(reportService.getDailyStatus(memberInfo.getId()));
    }

    @GetMapping("/age")
    public ResponseEntity<AgeGroupResponse> getAgeGroupReport(@AuthMember MemberInfo memberInfo) {
        return ResponseEntity.ok(reportService.getAgeGroup(memberInfo.getId()));
    }

    @GetMapping("/ktas")
    public ResponseEntity<DailyKtasResponse> getDailyKtas(@AuthMember MemberInfo memberInfo) {
        return ResponseEntity.ok(reportService.getDailyKtas(memberInfo.getId()));
    }

    @GetMapping("/response")
    public ResponseEntity<MonthlyApprovedResponse> getMonthlyApproved(@AuthMember MemberInfo memberInfo, @RequestParam Long year) {
        return ResponseEntity.ok(reportService.getMonthlyApproved(memberInfo.getId(), year));
    }
}
