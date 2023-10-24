package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.dto.CallingMessageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class CallingMessageController {
    private final SimpMessagingTemplate template;

    @MessageMapping("/purchase")
    public void purchase(CallingMessageDto callingMessageDto) {
        template.convertAndSend("/topic/market/" + callingMessageDto.getId(), callingMessageDto);

    }
//    @SendTo("/topic/message")
//    public CallingMessageDto send(CallingMessageDto callingMessageDto) {
//        return callingMessageDto;
//    }
}
