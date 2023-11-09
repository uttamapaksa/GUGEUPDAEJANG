package com.codesmith.goojangtransfer.transfer.dto.response;

import com.codesmith.goojangtransfer.transfer.persistence.domain.Status;
import com.codesmith.goojangtransfer.transfer.persistence.domain.Transfer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TransferHistoryListResponse {
    private String date;
    private String transferStartTime;
    private String transferEndTime;
    private String hospitalName;
    private String accidentAddress;
    private String ageGroup;
    private String gender;
    private String KTAS;
    private boolean isCompleted;

    public TransferHistoryListResponse(OccurrenceInfoResponse occurrenceInfo, Transfer transfer) {
        this.date = transfer.getArrivedAt().format(DateTimeFormatter.ofPattern("yy.MM.dd"));
        this.transferStartTime = occurrenceInfo.getCreatedAt().format(DateTimeFormatter.ofPattern("HH:mm"));
        this.transferEndTime = transfer.getArrivedAt().format(DateTimeFormatter.ofPattern("HH:mm"));
        this.hospitalName = occurrenceInfo.getHospitalId().toString();
        this.accidentAddress = occurrenceInfo.getAddress();
        this.ageGroup = occurrenceInfo.getAgeGroup();
        this.gender = occurrenceInfo.getGender();
        this.KTAS = occurrenceInfo.getKTAS();
        this.isCompleted = transfer.getStatus() == Status.COMPLETE;
    }
}
