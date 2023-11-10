package com.codesmith.goojangtransfer.transfer.persistence;

import com.codesmith.goojangtransfer.transfer.persistence.domain.Status;
import com.codesmith.goojangtransfer.transfer.persistence.domain.Transfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface TransferRepository extends JpaRepository<Transfer, Long> {
    Transfer findByCallingId(@Param("callingId") Long callingId);
    List<Transfer> findByMemberIdAndStatus(@Param("memberId") Long memberId, @Param("status") Status status);
    @Query("select t from Transfer t where t.callingId in :callingIds and t.status != 'TRANSFERRING' and t.arrivedAt between :from and :to order by t.arrivedAt desc")
    List<Transfer> findAllByCallingIds(@Param("callingIds") List<Long> callingIds, @Param("from") LocalDateTime from, @Param("to") LocalDateTime to);
}