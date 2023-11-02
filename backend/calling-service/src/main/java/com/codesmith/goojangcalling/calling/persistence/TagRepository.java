package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Optional<Tag> findByName(String inputTagName);

    Boolean existsByName(String inputTagName);

    @Query("SELECT t.name FROM OccurrenceTag ot JOIN ot.tag t WHERE ot.occurrence.id = :occurrenceId")
    List<String> findAllTagNameByOccurrenceId(@Param("occurrenceId") Long occurrenceId);
}
