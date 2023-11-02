package com.codesmith.goojangcalling.calling.persistence.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class Occurrence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long memberId;
    @Enumerated(EnumType.STRING)
    private KTAS ktas;
    @Enumerated(EnumType.STRING)
    private AgeGroup ageGroup;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String symptom;
    private Double latitude;
    private Double longitude;
    private String address;
    @CreatedDate
    private LocalDateTime createdAt;

    public Occurrence(Long memberId, KTAS ktas, AgeGroup ageGroup, Gender gender, String symptom, Double latitude, Double longitude, String address) {
        this.memberId = memberId;
        this.ktas = ktas;
        this.ageGroup = ageGroup;
        this.gender = gender;
        this.symptom = symptom;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
    }
}
