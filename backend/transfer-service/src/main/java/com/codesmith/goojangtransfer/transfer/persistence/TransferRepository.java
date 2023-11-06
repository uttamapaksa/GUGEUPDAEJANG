package com.codesmith.goojangtransfer.transfer.persistence;

import com.codesmith.goojangtransfer.transfer.persistence.domain.Transfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TransferRepository extends JpaRepository<Transfer, Long> {
    Transfer findByCallingId(@Param("callingId") Long callingId);
    List<Transfer> findByMemberId(@Param("memberId") Long memberId);
}
