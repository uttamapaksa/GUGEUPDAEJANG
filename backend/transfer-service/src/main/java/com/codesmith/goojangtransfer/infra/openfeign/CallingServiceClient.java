package com.codesmith.goojangtransfer.infra.openfeign;

import com.codesmith.goojangtransfer.global.passport.MemberInfo;
import com.codesmith.goojangtransfer.global.passport.presentation.AuthMember;
import com.codesmith.goojangtransfer.transfer.dto.response.OccurrenceInfoResponse;
import com.codesmith.goojangtransfer.transfer.dto.response.SafetyCenterInfoResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@FeignClient(name = "CALLING-SERVICE")
public interface CallingServiceClient {

    @GetMapping("/calling/transfer")
    List<OccurrenceInfoResponse> getOccurrenceInfoList(Map<String, String> paramedics);
}

