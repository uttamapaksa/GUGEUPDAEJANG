package com.codesmith.goojangtransfer.transfer.dto.message;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JoinMeetingMessage {
    private Long memberId;
    private Long transferId;
}