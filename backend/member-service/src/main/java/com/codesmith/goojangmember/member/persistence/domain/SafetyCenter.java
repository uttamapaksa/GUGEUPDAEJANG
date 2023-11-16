package com.codesmith.goojangmember.member.persistence.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Getter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class SafetyCenter {
    @Id
    private Long id;
    private String region;
    private String name;
    private String address;
    private String telephone;
    private String fax;

    public SafetyCenter(Long id, String region, String name, String address, String telephone, String fax) {
        this.id = id;
        this.region = region;
        this.name = name;
        this.address = address;
        this.telephone = telephone;
        this.fax = fax;
    }
}
