package com.codesmith.goojangcall.call.persistence.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Occurrence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long memberId;
    @Enumerated(EnumType.STRING)
    private KTAS ktas;
    private String age;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String symptom;
    private Double latitude;
    private Double longitude;
    @CreatedDate
    private LocalDateTime createdAt;

    public Occurrence(Long memberId, KTAS ktas, String age, Gender gender, String symptom, Double latitude, Double longitude) {
        this.memberId = memberId;
        this.ktas = ktas;
        this.age = age;
        this.gender = gender;
        this.symptom = symptom;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
