package com.codesmith.goojangtransfer.transfer.presentation;

import com.codesmith.goojangtransfer.transfer.dto.request.LocationMessageRequest;
import com.codesmith.goojangtransfer.transfer.dto.response.LocationMessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class TransferMessageController {
    @MessageMapping("/location/{paramedicId}")
    @SendTo("/topic/{paramedicId}/location")
    public LocationMessageResponse sendLocation(LocationMessageRequest locationMessageRequest) {
        return new LocationMessageResponse(locationMessageRequest.getTransferId(), locationMessageRequest.getLongitude(), locationMessageRequest.getLatitude());
    }
}

