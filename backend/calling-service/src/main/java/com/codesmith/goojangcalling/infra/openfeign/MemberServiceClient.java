package com.codesmith.goojangcalling.infra.openfeign;

import com.codesmith.goojangcalling.calling.dto.response.BedCountResponse;
import com.codesmith.goojangcalling.calling.dto.response.HospitalSearchResponse;
import com.codesmith.goojangcalling.calling.dto.response.MemberInfoResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "MEMBER-SERVICE")
public interface MemberServiceClient {

    @GetMapping("/member/hospital")
    List<HospitalSearchResponse> searchHospital(
            @RequestParam("latitude") Double latitude,
            @RequestParam("longitude") Double longitude,
            @RequestParam("distance") Double distance);

    @GetMapping("/member/{memberId}")
    MemberInfoResponse getMember(@PathVariable("memberId") Long memberId);

    @GetMapping("/member/bed/{memberId}")
    BedCountResponse getBedCount(@PathVariable("memberId") Long memberId);
}
