package com.codesmith.goojanggateway.infra.openfeign;

import com.codesmith.goojanggateway.dto.request.PassportCreateRequest;
import com.codesmith.goojanggateway.dto.response.PassportCreateResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@FeignClient(name = "MEMBER-SERVICE", url = "https://k9b204.p.ssafy.io:64417")
public interface MemberServiceClient {

    @PostMapping("/auth/passport")
    PassportCreateResponse getPassport(@RequestBody PassportCreateRequest passportCreateRequest);
}