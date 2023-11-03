package com.codesmith.goojangcalling.calling.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class HistoryListResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
