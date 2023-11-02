package com.codesmith.goojangtransfer.transfer.presentation;

import com.codesmith.goojangtransfer.transfer.dto.TransferMessageDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@Slf4j
public class TransferMessageController {

    @MessageMapping("/{hospitalId}")
    @SendTo("/topic/{hospitalId}")
    public TransferMessageDto send(TransferMessageDto transferMessageDto, @DestinationVariable(value = "hospitalId") final Long hospitalId) {
        log.info("hospitalId: {}, transferMessageDto: {}", hospitalId, transferMessageDto);
        return transferMessageDto;
    }
}
