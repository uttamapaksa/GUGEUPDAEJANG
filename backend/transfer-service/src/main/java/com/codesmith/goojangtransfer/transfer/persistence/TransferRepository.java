package com.codesmith.goojangtransfer.transfer.persistence;

import com.codesmith.goojangtransfer.transfer.persistence.domain.Transfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TransferRepository extends JpaRepository<Transfer, Long> {

    @Query(value = "SELECT * FROM transfer WHERE calling_id = :callingId", nativeQuery = true)
    Transfer findByCallingId(@Param("callingId") Long callingId);
}
