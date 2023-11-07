package com.codesmith.goojangcalling.calling.persistence.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@NoArgsConstructor
public class CallingItem {
    private Long id;
    private String ageGroup;
    private String gender;
    private String tags;
    private String address;
    private String callingTime;
    private String replyTime;
    private String ktas;
}
