package com.codesmith.goojangtransfer.infra.openfeign;

import com.codesmith.goojangtransfer.member.dto.response.MemberInfoResponse;
import com.codesmith.goojangtransfer.transfer.dto.response.SafetyCenterInfoResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "MEMBER-SERVICE")
public interface MemberServiceClient {
    @GetMapping("/member/{memberId}")
    MemberInfoResponse getMember(@PathVariable("memberId") Long memberId);

    @GetMapping("/member/my-safety-center")
    SafetyCenterInfoResponse getSafetyCenterInfo(@RequestParam("memberId") Long memberId);
}

