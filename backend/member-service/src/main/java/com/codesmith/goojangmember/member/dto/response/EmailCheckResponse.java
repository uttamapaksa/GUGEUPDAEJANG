package com.codesmith.goojangmember.member.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class EmailCheckResponse {
    private boolean alreadyExists;
}
