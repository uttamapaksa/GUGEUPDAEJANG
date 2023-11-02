package com.codesmith.goojangtransfer.transfer.persistence.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Transfer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long callingId;
    private boolean isArrived;
    private LocalDateTime arrivedAt;

    public Transfer(Long callingId, boolean isArrived, LocalDateTime arrivedAt) {
        this.callingId = callingId;
        this.isArrived = isArrived;
        this.arrivedAt = arrivedAt;
    }

    public Transfer(Long id, Long callingId, boolean isArrived, LocalDateTime arrivedAt) {
        this.id = id;
        this.callingId = callingId;
        this.isArrived = isArrived;
        this.arrivedAt = arrivedAt;
    }

    public void updateArriveInfo(boolean isArrived, LocalDateTime arrivedAt) {
        this.isArrived = isArrived;
        this.arrivedAt = arrivedAt;
    }
}
