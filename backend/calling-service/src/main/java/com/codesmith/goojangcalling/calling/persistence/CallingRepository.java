package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.Calling;
import com.codesmith.goojangcalling.calling.persistence.domain.Occurrence;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CallingRepository extends JpaRepository<Calling, Long> {
    List<Calling> findAllByOccurrence(Occurrence occurrence);
}
