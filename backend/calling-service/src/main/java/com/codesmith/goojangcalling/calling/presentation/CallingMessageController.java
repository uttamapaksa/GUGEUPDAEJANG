package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.application.CallingService;
import com.codesmith.goojangcalling.calling.dto.CallingMessageDto;
import com.codesmith.goojangcalling.calling.dto.message.StatusChangeMessage;
import com.codesmith.goojangcalling.global.passport.MemberInfo;
import com.codesmith.goojangcalling.global.passport.presentation.AuthMember;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CallingMessageController {

    private final CallingService callingService;

    @MessageMapping("/{hospitalId}")
    @SendTo("/topic/{hospitalId}")
    public CallingMessageDto send(CallingMessageDto callingMessageDto) {
        return callingMessageDto;
    }

    @MessageMapping("/status/{memberId}")
    @SendTo("/topic/status/{memberId}")
    public StatusChangeMessage changeCallingStatus(@AuthMember MemberInfo memberInfo, StatusChangeMessage statusChangeMessage) {
        callingService.changeCallingStatus(memberInfo.getId(), statusChangeMessage);
        return statusChangeMessage;
    }
}
