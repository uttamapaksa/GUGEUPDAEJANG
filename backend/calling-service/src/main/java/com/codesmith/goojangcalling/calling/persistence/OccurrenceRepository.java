package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.Occurrence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OccurrenceRepository extends JpaRepository<Occurrence, Long> {
}
