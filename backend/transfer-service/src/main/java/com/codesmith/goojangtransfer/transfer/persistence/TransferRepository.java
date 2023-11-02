package com.codesmith.goojangtransfer.transfer.persistence;

import com.codesmith.goojangtransfer.transfer.persistence.domain.Transfer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransferRepository extends JpaRepository<Transfer, Long> {
}
