package com.codesmith.goojangmember.member.presentation;

import com.codesmith.goojangmember.global.passport.dto.MemberInfo;
import com.codesmith.goojangmember.global.passport.presentation.AuthMember;
import com.codesmith.goojangmember.member.application.MemberService;
import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.HospitalListRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.dto.response.*;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/{memberId}")
    public ResponseEntity<MemberInfoResponse> getMember(@PathVariable("memberId") Long memberId) {
        return ResponseEntity.ok(memberService.getMemberInfo(memberId));
    }

    @GetMapping("/my-hospital")
    public ResponseEntity<HospitalInfoResponse> getHospitalMember(@AuthMember MemberInfo memberInfo) {
        return ResponseEntity.ok(memberService.getHospitalInfo(memberInfo.getId()));
    }

    @GetMapping("/hospital")
    public ResponseEntity<List<HospitalListResponse>> getHospitalListFromHere(@ModelAttribute HospitalListRequest hospitalListRequest) {
        return ResponseEntity.ok(memberService.getHospitalList(hospitalListRequest));
    }

    @GetMapping("/check-email")
    public ResponseEntity<EmailCheckResponse> checkEmail(@RequestParam("email") String email) {
        return ResponseEntity.ok(memberService.checkEmail(email));
    }

    @PostMapping("/paramedic/join")
    public ResponseEntity<Void> join(@RequestBody ParamedicJoinRequest paramedicJoinRequest) {
        memberService.join(paramedicJoinRequest);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/hospital/join")
    public ResponseEntity<Void> join(@RequestBody HospitalJoinRequest hospitalJoinRequest) {
        memberService.join(hospitalJoinRequest);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/center")
    public ResponseEntity<List<CenterListResponse>> searchCenter(@RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(memberService.getSafetyCenterList(keyword));
    }

    @GetMapping("/bed/{memberId}")
    public ResponseEntity<BedCountResponse> getBedCount(@PathVariable("memberId") Long memberId) {
        return ResponseEntity.ok(memberService.getBedCount(memberId));
    }
}
