package com.codesmith.goojangcalling.member;

import com.codesmith.goojangcalling.global.passport.MemberInfo;
import com.codesmith.goojangcalling.global.passport.presentation.AuthMember;
import com.codesmith.goojangcalling.member.application.MemberService;
import com.codesmith.goojangcalling.member.persistence.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/member")
    public ResponseEntity<Member> getMember(@AuthMember MemberInfo memberInfo) {
        return ResponseEntity.ok(memberService.getMember(memberInfo.getId()));
    }
}
