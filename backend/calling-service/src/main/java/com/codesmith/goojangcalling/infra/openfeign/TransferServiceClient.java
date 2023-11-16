package com.codesmith.goojangcalling.infra.openfeign;

import com.codesmith.goojangcalling.calling.dto.request.CreateTransferRequest;
import com.codesmith.goojangcalling.calling.dto.response.TransferCreateResponse;
import com.codesmith.goojangcalling.calling.dto.response.TransferListResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "TRANSFER-SERVICE")
public interface TransferServiceClient {

    @PostMapping("/transfer")
    TransferCreateResponse createTransfer(@RequestBody CreateTransferRequest createTransferRequest);

    @GetMapping("/transfer/member/{memberId}")
    List<TransferListResponse> getTransferByMemberInTransferring(@PathVariable("memberId") Long memberId);
}
