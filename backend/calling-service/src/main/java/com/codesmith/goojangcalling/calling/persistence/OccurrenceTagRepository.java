package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.Occurrence;
import com.codesmith.goojangcalling.calling.persistence.domain.OccurrenceTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OccurrenceTagRepository extends JpaRepository<OccurrenceTag, Long> {

    @Query(value = "select ot.tag.name from OccurrenceTag ot where ot.occurrence = :occurrence")
    List<String> findAllByOccurrence(@Param("occurrence") Occurrence occurrence);
}
