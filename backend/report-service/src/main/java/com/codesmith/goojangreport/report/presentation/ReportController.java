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
        Long[] arr1 = {280L, 290L, 330L, 360L, 320L, 330L, 290L, 330L};
        Long[] arr2 = {160L, 180L, 190L, 150L, 250L, 200L, 170L, 220L};
        Long[] arr3 = {120L, 110L, 140L, 210L, 170L, 130L, 120L, 110L};
        ArrayList<Long> list1 = new ArrayList<>(Arrays.asList(arr1));
        ArrayList<Long> list2 = new ArrayList<>(Arrays.asList(arr2));
        ArrayList<Long> list3 = new ArrayList<>(Arrays.asList(arr3));
        return ResponseEntity.ok(new AgeGroupResponse(list1, list2, list3));
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
