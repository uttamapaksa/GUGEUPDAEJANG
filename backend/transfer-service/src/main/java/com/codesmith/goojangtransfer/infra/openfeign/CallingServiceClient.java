package com.codesmith.goojangtransfer.infra.openfeign;

import com.codesmith.goojangtransfer.transfer.dto.response.OccurrenceInfoResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@FeignClient(name = "CALLING-SERVICE")
public interface CallingServiceClient {

    @GetMapping("/calling/transfer")
    List<OccurrenceInfoResponse> getOccurrenceInfoList(@RequestParam("memberInfoMap") Map<String, String> paramedics);
}

