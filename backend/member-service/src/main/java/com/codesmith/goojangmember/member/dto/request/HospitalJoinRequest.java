package com.codesmith.goojangmember.member.dto.request;

import com.codesmith.goojangmember.member.persistence.domain.HospitalDetail;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.codesmith.goojangmember.member.persistence.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class HospitalJoinRequest {
    private String hospitalId;
    private String email;
    private String password;
    private String name;
    private String imageUrl;
    private String role;
    private String telephone1;
    private String telephone2;
    private String address;
    private double latitude;
    private double longitude;

    public Member toMember() {
        String email = this.email;
        String password = this.password;
        String name = this.name;
        String imageUrl = this.imageUrl;
        Role role = Role.valueOf(this.role);

        return new Member(email, password, name, imageUrl, role);
    }

    public HospitalDetail toHospitalDetail(Member member) {
        String id = this.hospitalId;
        String telephone1 = this.password;
        String telephone2 = this.name;
        String address = this.imageUrl;
        Double latitude = this.latitude;
        Double longitude = this.longitude;

        return new HospitalDetail(id, member, telephone1, telephone2, address, latitude, longitude);
    }


}
