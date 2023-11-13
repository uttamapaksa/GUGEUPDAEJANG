package com.codesmith.goojangreport.report.presentation;

import com.codesmith.goojangreport.global.passport.MemberInfo;
import com.codesmith.goojangreport.global.passport.presentation.AuthMember;
import com.codesmith.goojangreport.report.application.ReportService;
import com.codesmith.goojangreport.report.dto.reponse.CallingPerTimeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
    public ResponseEntity<CallingPerTimeResponse> getDailyTimeReport(@AuthMember MemberInfo memberInfo) {
        Long[] arr = {440L, 505L, 414L, 671L, 227L, 413L, 201L, 352L, 352L, 752L, 320L, 257L};
        List<Long> list = new ArrayList<>(Arrays.asList(arr));
        return ResponseEntity.ok(new CallingPerTimeResponse(list));
    }
}
