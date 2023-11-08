package com.codesmith.goojangcalling.calling.persistence.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class CallingItem {
    private Long id;
    private AgeGroup ageGroup;
    private Gender gender;
    private String tags;
    private String address;
    private LocalDateTime callingTime;
    private LocalDateTime replyTime;
    private Status status;
    private KTAS ktas;

    public CallingItem(Long id, AgeGroup ageGroup, Gender gender, String address, LocalDateTime callingTime, LocalDateTime replyTime, Status status, KTAS ktas) {
        this.id = id;
        this.ageGroup = ageGroup;
        this.gender = gender;
        this.address = address;
        this.callingTime = callingTime;
        this.replyTime = replyTime;
        this.status = status;
        this.ktas = ktas;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }
}
