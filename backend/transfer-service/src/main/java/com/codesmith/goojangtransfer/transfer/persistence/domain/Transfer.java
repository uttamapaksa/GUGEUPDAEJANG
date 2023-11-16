package com.codesmith.goojangtransfer.transfer.persistence.domain;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
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
    private Long memberId;
    @Enumerated(EnumType.STRING)
    private Status status;

    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime arrivedAt;

    public Transfer(Long callingId, Long memberId, Status status, LocalDateTime arrivedAt) {
        this.callingId = callingId;
        this.memberId = memberId;
        this.status = status;
        this.arrivedAt = arrivedAt;
    }

    public Transfer(Long id, Long callingId, Long memberId, Status status, LocalDateTime arrivedAt) {
        this.id = id;
        this.callingId = callingId;
        this.memberId = memberId;
        this.status = status;
        this.arrivedAt = arrivedAt;
    }

    public void complete() {
        this.status = Status.COMPLETE;
        this.arrivedAt = LocalDateTime.now();
    }

    public void cancel() {
        this.status = Status.CANCELED;
    }
}
