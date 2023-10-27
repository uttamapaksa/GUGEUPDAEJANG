package com.codesmith.goojangmember.member.dto.request;

import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ParamedicJoinRequest {
    private String email;
    private String password;
    private String name;
    private String imageUrl;
    private String role;
    private Long centerId;

    public Member toMember() {
        String email = this.email;
        String password = this.password;
        String name = this.name;
        String imageUrl = this.imageUrl;
        Role role = Role.valueOf(this.role);

        return new Member(email, password, name, imageUrl, role);
    }
}
