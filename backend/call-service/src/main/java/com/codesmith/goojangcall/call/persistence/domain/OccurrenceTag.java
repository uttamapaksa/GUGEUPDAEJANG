package com.codesmith.goojangcall.call.persistence.domain;

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
    private Tag tagId;

    public OccurrenceTag(Occurrence occurrence, Tag tagId) {
        this.occurrence = occurrence;
        this.tagId = tagId;
    }
}
