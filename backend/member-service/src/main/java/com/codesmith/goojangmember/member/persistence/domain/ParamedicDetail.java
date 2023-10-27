package com.codesmith.goojangmember.member.persistence.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Getter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class ParamedicDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(fetch = FetchType.LAZY)
    private Member member;
    @ManyToOne(fetch = FetchType.LAZY)
    private SafetyCenter safetyCenter;

    public ParamedicDetail(Member member, SafetyCenter safetyCenter) {
        this.member = member;
        this.safetyCenter = safetyCenter;
    }

    public ParamedicDetail(Long id, Member member, SafetyCenter safetyCenter) {
        this.id = id;
        this.member = member;
        this.safetyCenter = safetyCenter;
    }
}
