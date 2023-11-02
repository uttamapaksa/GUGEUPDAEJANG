package com.codesmith.goojangmember.member.presentation;

import com.codesmith.goojangmember.member.application.MemberService;
import com.codesmith.goojangmember.member.dto.request.HospitalJoinRequest;
import com.codesmith.goojangmember.member.dto.request.ParamedicJoinRequest;
import com.codesmith.goojangmember.member.dto.response.CenterListResponse;
import com.codesmith.goojangmember.member.dto.response.EmailCheckResponse;
import com.codesmith.goojangmember.member.dto.response.HospitalListResponse;
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
    public ResponseEntity<Member> getMember(@PathVariable("memberId") Long memberId) {
        return ResponseEntity.ok(memberService.getMemberInfo(memberId));
    }

    @GetMapping("/hospital")
    public ResponseEntity<List<HospitalListResponse>> getHospitalListFromHere(@RequestParam Double latitude, @RequestParam Double longitude, @RequestParam Double distance) {
        return ResponseEntity.ok(memberService.getHospitalList(latitude, longitude, distance));
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

}
