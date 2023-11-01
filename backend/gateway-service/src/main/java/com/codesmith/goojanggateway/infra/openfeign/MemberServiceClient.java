package com.codesmith.goojanggateway.infra.openfeign;

import com.codesmith.goojanggateway.dto.request.PassportCreateRequest;
import com.codesmith.goojanggateway.dto.response.PassportCreateResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "MEMBER-SERVICE")
public interface MemberServiceClient {

    @PostMapping("/auth/passport")
    PassportCreateResponse getPassport(@RequestBody PassportCreateRequest passportCreateRequest);
}