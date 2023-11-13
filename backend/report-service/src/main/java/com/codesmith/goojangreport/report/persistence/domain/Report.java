package com.codesmith.goojangreport.report.persistence.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long paramedicMemberId;
    private Long hospitalMemberId;
    private Long occurrenceId;
    private String ktas;
    private String ageGroup;
    private String gender;
    private LocalDateTime occurrenceTime;
    private Double latitude;
    private Double longitude;
    private String address;
    private Long callingId;
    private String callingStatus;
    private LocalDateTime callingTime;
    private LocalDateTime responseTime;
    private String reason;
    private Long transferId;
    private String transferStatus;
    private LocalDateTime arriveTime;

    public Report(Long paramedicMemberId, Long hospitalMemberId, Long occurrenceId, String ktas, String ageGroup, String gender, LocalDateTime occurrenceTime, Double latitude, Double longitude, String address, Long callingId, String callingStatus, LocalDateTime callingTime, LocalDateTime responseTime, String reason, Long transferId, String transferStatus, LocalDateTime arriveTime) {
        this.paramedicMemberId = paramedicMemberId;
        this.hospitalMemberId = hospitalMemberId;
        this.occurrenceId = occurrenceId;
        this.ktas = ktas;
        this.ageGroup = ageGroup;
        this.gender = gender;
        this.occurrenceTime = occurrenceTime;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.callingId = callingId;
        this.callingStatus = callingStatus;
        this.callingTime = callingTime;
        this.responseTime = responseTime;
        this.reason = reason;
        this.transferId = transferId;
        this.transferStatus = transferStatus;
        this.arriveTime = arriveTime;
    }

    public Report(Long paramedicMemberId, Long hospitalMemberId, Long occurrenceId,
                  String ktas, String ageGroup, String gender, LocalDateTime occurrenceTime,
                  Double latitude, Double longitude, String address,
                  Long callingId, String callingStatus, LocalDateTime callingTime) {
        this.paramedicMemberId = paramedicMemberId;
        this.hospitalMemberId = hospitalMemberId;
        this.occurrenceId = occurrenceId;
        this.ktas = ktas;
        this.ageGroup = ageGroup;
        this.gender = gender;
        this.occurrenceTime = occurrenceTime;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.callingId = callingId;
        this.callingStatus = callingStatus;
        this.callingTime = callingTime;
    }

    public void updateCallingStatue(String status) {
        this.callingStatus = status;
    }

    public void hospitalResponse(LocalDateTime responseTime) {
        this.responseTime = responseTime;
    }

    public void startTransfer(Long transferId) {
        this.transferId = transferId;
    }

    public void updateTransferStatue(String status) {
        this.transferStatus = status;
    }

    public void arrived(LocalDateTime arriveTime) {
        this.arriveTime = arriveTime;
    }
}
