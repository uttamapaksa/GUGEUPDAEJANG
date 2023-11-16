package com.codesmith.goojangreport.report.dto.message;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CallingStatusMessage {
    private Long callingId;
    private String status;
}