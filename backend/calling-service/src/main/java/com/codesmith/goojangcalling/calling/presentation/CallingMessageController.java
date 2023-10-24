package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.dto.CallingMessageDto;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class CallingMessageController {

    @MessageMapping("/{hospitalId}")
    @SendTo("/topic/{hospitalId}")
    public CallingMessageDto send(CallingMessageDto callingMessageDto) {
        return callingMessageDto;
    }
}
