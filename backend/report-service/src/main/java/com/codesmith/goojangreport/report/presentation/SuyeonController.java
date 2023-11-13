package com.codesmith.goojangreport.report.presentation;

import com.codesmith.goojangreport.global.passport.MemberInfo;
import com.codesmith.goojangreport.global.passport.presentation.AuthMember;
import com.codesmith.goojangreport.report.application.ReportService;
import com.codesmith.goojangreport.report.dto.reponse.CallingPerTimeResponse;
import com.codesmith.goojangreport.report.dto.reponse.DailyKtasResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/report")
public class SuyeonController {

    private final ReportService reportService;

    @GetMapping("/response")
    public ResponseEntity<DailyKtasResponse> getDailyKtas(@AuthMember MemberInfo memberInfo) {
        return ResponseEntity.ok(reportService.getDailyKtas(memberInfo.getId()));
    }
}
