package com.codesmith.goojangmember.member.persistence.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class HospitalDetail {
    @Id
    private String id;
    @OneToOne(fetch = FetchType.LAZY)
    private Member member;
    private String telephone1;
    private String telephone2;
    private String address;
    private Double latitude;
    private Double longitude;
    @CreatedDate
    private LocalDateTime createdAt;

    public HospitalDetail(String id, Member member, String telephone1, String telephone2, String address, double latitude, double longitude) {
        this.id = id;
        this.member = member;
        this.telephone1 = telephone1;
        this.telephone2 = telephone2;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
