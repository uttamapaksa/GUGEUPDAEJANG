package com.codesmith.goojangcalling.calling.persistence.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class OccurrenceTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    private Occurrence occurrence;
    @ManyToOne(fetch = FetchType.LAZY)
    private Tag tag;

    public OccurrenceTag(Occurrence occurrence, Tag tag) {
        this.occurrence = occurrence;
        this.tag = tag;
    }
}
