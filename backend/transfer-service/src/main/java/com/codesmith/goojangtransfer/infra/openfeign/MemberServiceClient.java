package com.codesmith.goojangtransfer.infra.openfeign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "MEMBER-SERVICE")
public interface MemberServiceClient {

    // TODO: 임시 메서드
    @GetMapping("/member/hospital")
    List<String> getPassport(@RequestBody String str);
}

