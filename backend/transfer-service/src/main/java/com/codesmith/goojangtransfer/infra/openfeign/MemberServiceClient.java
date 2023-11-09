package com.codesmith.goojangtransfer.infra.openfeign;

import com.codesmith.goojangtransfer.member.dto.response.MemberInfoResponse;
import com.codesmith.goojangtransfer.global.passport.MemberInfo;
import com.codesmith.goojangtransfer.global.passport.presentation.AuthMember;
import com.codesmith.goojangtransfer.transfer.dto.response.SafetyCenterInfoResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "MEMBER-SERVICE")
public interface MemberServiceClient {
    @GetMapping("/member/hospital")
    List<String> getPassport(@RequestBody String str);

    @GetMapping("/member/my-safety-center")
    SafetyCenterInfoResponse getSafetyCenterInfo(@AuthMember MemberInfo memberInfo);
}

