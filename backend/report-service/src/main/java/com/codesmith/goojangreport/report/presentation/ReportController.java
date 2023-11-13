package com.codesmith.goojangreport.report.presentation;

import com.codesmith.goojangreport.global.passport.MemberInfo;
import com.codesmith.goojangreport.global.passport.presentation.AuthMember;
import com.codesmith.goojangreport.report.application.ReportService;
import com.codesmith.goojangreport.report.dto.reponse.*;
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
        Long[] arr = {440L, 505L, 414L, 671L, 227L, 413L, 201L, 352L, 352L, 752L, 320L, 257L};
        List<Long> list = new ArrayList<>(Arrays.asList(arr));
        return ResponseEntity.ok(new CallingPerTimeResponse(list));
    }

    @GetMapping("/status")
    public ResponseEntity<DailyStatusResponse> getDailyStatusReport(@AuthMember MemberInfo memberInfo) {
        Long[] arr = {44L, 55L, 13L, 43L, 22L, 30L};
        List<Long> list = new ArrayList<>(Arrays.asList(arr));
        return ResponseEntity.ok(new DailyStatusResponse(list));
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
        List<Long> ktas1 = new ArrayList<>(Arrays.asList(280L, 290L, 330L, 360L, 320L, 330L, 290L));
        List<Long> ktas2 = new ArrayList<>(Arrays.asList(160L, 180L, 190L, 150L, 250L, 200L, 170L));
        List<Long> ktas3 = new ArrayList<>(Arrays.asList(120L, 110L, 140L, 210L, 170L, 130L, 120L));
        List<Long> ktas4 = new ArrayList<>(Arrays.asList(140L, 210L, 170L, 120L, 220L, 130L, 120L));
        List<Long> ktas5 = new ArrayList<>(Arrays.asList(120L, 110L, 140L, 210L, 140L, 210L, 170L));
        return ResponseEntity.ok(new DailyKtasResponse(ktas1, ktas2, ktas3, ktas4, ktas5));
    }

    @GetMapping("/response")
    public ResponseEntity<MonthlyApprovedResponse> getMontlyApproved(@AuthMember MemberInfo memberInfo, @RequestParam Long year) {
        List<Long> total = new ArrayList<>(Arrays.asList(280L, 290L, 330L, 360L, 320L, 330L, 290L, 330L, 360L, 320L, 330L, 290L));
        List<Long> approved = new ArrayList<>(Arrays.asList(160L, 180L, 190L, 150L, 250L, 200L, 170L, 220L, 150L, 250L, 200L, 170L));
        return ResponseEntity.ok(new MonthlyApprovedResponse(total, approved));
    }
}
