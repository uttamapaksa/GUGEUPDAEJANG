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
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String email;
    private String password;
    private String name;
    private String imageUrl;
    private boolean isApproved;
    @Enumerated(EnumType.STRING)
    private Role role;
    @CreatedDate
    private LocalDateTime createdAt;

    public Member(String email, String password, String name, String imageUrl, Role role) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.imageUrl = imageUrl;
        this.role = role;
    }

    public Member(Long id, String email, String password, String name, String imageUrl, Role role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.imageUrl = imageUrl;
        this.role = role;
    }
}