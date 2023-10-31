package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.OccurrenceTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OccurrenceTagRepository extends JpaRepository<OccurrenceTag, Long> {
}
