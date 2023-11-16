package com.codesmith.goojangmember.member.persistence.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {
    HOSPITAL("ROLE_HOSPITAL"), PARAMEDIC("ROLE_PARAMEDIC"), ADMIN("ROLE_ADMIN");

    private final String key;
}
