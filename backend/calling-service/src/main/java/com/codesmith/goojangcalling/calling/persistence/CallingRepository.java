package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.Calling;
import com.codesmith.goojangcalling.calling.persistence.domain.Occurrence;
import com.codesmith.goojangcalling.calling.persistence.domain.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CallingRepository extends JpaRepository<Calling, Long>, CallingSupportRepository {
    List<Calling> findAllByOccurrence(Occurrence occurrence);

    Boolean existsByOccurrenceAndStatus(Occurrence occurrence, Status status);
}