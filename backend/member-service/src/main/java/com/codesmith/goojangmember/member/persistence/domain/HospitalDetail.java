package com.codesmith.goojangmember.member.persistence.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class HospitalDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    @OneToOne
    private Member memberId;
    private String telephone;
    private String address;
    private double latitude;
    private double longitude;
}
