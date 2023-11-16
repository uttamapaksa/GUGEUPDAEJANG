package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.OccurrenceFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OccurrenceFileRepository extends JpaRepository<OccurrenceFile, Long> {
    @Query("SELECT of.savedFileName FROM OccurrenceFile of WHERE of.occurrence.id = :occurrenceId")
    List<String> findAllFileNameByOccurrenceId(@Param("occurrenceId") Long occurrenceId);
}
