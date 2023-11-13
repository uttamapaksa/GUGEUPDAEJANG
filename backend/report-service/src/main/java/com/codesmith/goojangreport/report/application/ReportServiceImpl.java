package com.codesmith.goojangreport.report.application;

import com.codesmith.goojangreport.report.dto.message.CallingCreateMessage;
import com.codesmith.goojangreport.report.dto.message.CallingStatusMessage;
import com.codesmith.goojangreport.report.dto.message.TransferMessage;
import com.codesmith.goojangreport.report.persistence.ReportRepository;
import com.codesmith.goojangreport.report.persistence.domain.Report;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RequiredArgsConstructor
@Service
public class ReportServiceImpl implements ReportService {
    private final ReportRepository reportRepository;
    @Override
    public void createReport(CallingCreateMessage callingCreateMessage) {
        reportRepository.save(convertToReport(callingCreateMessage));
    }

    @Override
    public void updateReport(CallingStatusMessage message) {
        Report report = reportRepository.findByCallingId(message.getCallingId());
        report.updateCallingStatue(message.getStatus());

        if (message.getStatus().equals("REJECTED") || message.getStatus().equals("APPROVED")) {
            report.hospitalResponse(LocalDateTime.now());
        }

        reportRepository.save(report);
    }

    @Override
    public void updateReport(TransferMessage transferMessage) {
        Report report = reportRepository.findByCallingId(transferMessage.getCallingId());
        report.startTransfer(transferMessage.getId());
        report.updateTransferStatue(transferMessage.getStatus());

        if (transferMessage.getArrivedAt() != null) {
            report.arrived(transferMessage.getArrivedAt());
        }

        reportRepository.save(report);
    }

    private Report convertToReport(CallingCreateMessage msg) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSSSS");

        Long paramedicMemberId = msg.getMemberId();
        Long hospitalMemberId = msg.getHospitalId();
        Long occurrenceId = msg.getOccurrenceId();
        String ktas = msg.getKtas();
        String ageGroup = msg.getAgeGroup();
        String gender = msg.getGender();
        LocalDateTime occurrenceTime = LocalDateTime.parse(msg.getOccurrenceTime(), formatter);
        Double latitude = msg.getLatitude();
        Double longitude = msg.getLongitude();
        String address = msg.getAddress();
        Long callingId = msg.getId();
        String callingStatus = msg.getStatus();
        LocalDateTime callingTime = LocalDateTime.now();


        return new Report(paramedicMemberId, hospitalMemberId, occurrenceId, ktas, ageGroup, gender,
                occurrenceTime, latitude, longitude, address, callingId, callingStatus, callingTime);
    }
}
