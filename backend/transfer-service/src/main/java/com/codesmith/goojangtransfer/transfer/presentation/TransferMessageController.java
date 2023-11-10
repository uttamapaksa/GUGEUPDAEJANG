package com.codesmith.goojangtransfer.transfer.presentation;

import com.codesmith.goojangtransfer.transfer.dto.message.LocationNotiMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class TransferMessageController {
    @MessageMapping("/location/{memberId}")
    @SendTo("/topic/{memberId}/location")
    public LocationNotiMessage sendLocation(LocationNotiMessage locationNotiMessage) {
        return locationNotiMessage;
    }
}

