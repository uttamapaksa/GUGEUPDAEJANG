package com.codesmith.goojangtransfer.transfer.application;

import com.codesmith.goojangtransfer.transfer.dto.request.TransferCreateRequest;
import com.codesmith.goojangtransfer.transfer.dto.response.MeetingJoinResponse;
import com.codesmith.goojangtransfer.transfer.dto.response.TransferListResponse;
import com.codesmith.goojangtransfer.transfer.dto.response.TransferStatusChangeResponse;
import com.codesmith.goojangtransfer.transfer.dto.response.TransferCreateResponse;
import java.util.List;

public interface TransferService {
    TransferCreateResponse createTransfer(TransferCreateRequest transferCreateRequest);
    TransferStatusChangeResponse completeTransfer(Long transferId);
    TransferStatusChangeResponse cancelTransfer(Long transferId);
    List<TransferListResponse> getTransferByMember(Long memberId);
    MeetingJoinResponse joinMeeting(Long memberId, Long transferId);
    void deleteMeeting(Long transferId);
}
