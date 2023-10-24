package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.OccurrenceTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OccurrenceTagRespository extends JpaRepository<OccurrenceTag, Long> {
}
