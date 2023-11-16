package com.codesmith.goojangreport.global.passport;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberInfo {
    private Long id;
    private String email;
    private String name;
    private String imageUrl;
    private String role;
}
