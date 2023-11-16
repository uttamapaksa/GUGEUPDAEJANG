package com.codesmith.goojangtransfer.global.passport;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberInfo {
    private Long id;
    private String email;
    private String name;
    private String imageUrl;
    private String role;
}