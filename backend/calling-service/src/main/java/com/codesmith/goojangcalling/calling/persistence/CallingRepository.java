package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.persistence.domain.Calling;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CallingRepository extends JpaRepository<Calling, Long> {
}
