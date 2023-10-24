package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.OccurrenceFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OccurrenceFileRespository extends JpaRepository<OccurrenceFile, Long> {
}
