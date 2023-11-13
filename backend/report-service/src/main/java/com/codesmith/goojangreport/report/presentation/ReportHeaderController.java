package com.codesmith.goojangreport.report.presentation;

import com.codesmith.goojangreport.global.passport.MemberInfo;
import com.codesmith.goojangreport.global.passport.presentation.AuthMember;
import com.codesmith.goojangreport.report.application.ReportService;
import com.codesmith.goojangreport.report.dto.reponse.ReportHeaderResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/report")
public class ReportHeaderController {
    private final ReportService reportService;

    @GetMapping("/header")
    public ResponseEntity<ReportHeaderResponse> getHeaderValues(@AuthMember MemberInfo memberInfo) {
        return ResponseEntity.ok(reportService.getHeaderValues(memberInfo.getId()));
    }
}
