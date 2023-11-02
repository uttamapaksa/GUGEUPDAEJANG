package com.codesmith.goojangtransfer.transfer.presentation;

import com.codesmith.goojangtransfer.transfer.application.TransferService;
import com.codesmith.goojangtransfer.transfer.dto.response.TransferCompleteResponse;
import com.codesmith.goojangtransfer.transfer.dto.response.TransferCreateResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transfer")
@RequiredArgsConstructor
public class TransferController {

    private final TransferService transferService;

    @PostMapping
    public TransferCreateResponse createTransfer(@RequestParam Long callingId) {
        return transferService.createTransfer(callingId);
    }

    @PutMapping("/{transferId}")
    public TransferCompleteResponse completeTransfer(@PathVariable Long transferId) {
        return transferService.completeTransfer(transferId);
    }

}
