package com.codesmith.goojangcalling.calling.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CallingMessageDto {
    private Long id;
    private String roomId;
    private String writer;
    private String message;
}
