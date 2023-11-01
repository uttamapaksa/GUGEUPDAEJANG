package com.codesmith.goojangcalling.infra.openfeign;

import com.codesmith.goojangcalling.calling.dto.response.HospitalSearchResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "MEMBER-SERVICE")
public interface MemberServiceClient {

    @GetMapping("/member/hospital")
    List<HospitalSearchResponse> getPassport(@RequestBody String str);
}
