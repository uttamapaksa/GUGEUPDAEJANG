package com.codesmith.goojangreport.report.application;

import com.codesmith.goojangreport.report.dto.message.CallingCreateMessage;
import com.codesmith.goojangreport.report.dto.message.CallingStatusMessage;
import com.codesmith.goojangreport.report.dto.message.TransferMessage;
import com.codesmith.goojangreport.report.dto.reponse.DailyKtasResponse;
import com.codesmith.goojangreport.report.dto.reponse.ReportHeaderResponse;
import com.codesmith.goojangreport.report.persistence.ReportRepository;
import com.codesmith.goojangreport.report.persistence.domain.DailyKtas;
import com.codesmith.goojangreport.report.persistence.domain.Report;
import com.codesmith.goojangreport.report.persistence.domain.ReportHeader;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

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
    public void updateReport(TransferMessage message) {
        Report report = reportRepository.findByCallingId(message.getCallingId());
        report.startTransfer(message.getId());
        report.updateTransferStatue(message.getStatus());

        if (message.getArrivedAt() != null) {
            report.arrived(message.getArrivedAt());
        }

        reportRepository.save(report);
    }

    @Override
    public ReportHeaderResponse getHeaderValues(Long memberId) {
        ReportHeader reportHeader = reportRepository.getHeaderValue(memberId);
        return convertToReportHeaderResponse(reportHeader);
    }

    @Override
    public DailyKtasResponse getDailyKtas(Long memberId) {
        DailyKtas dailyKtas = new DailyKtas();
        dailyKtas.setKtas1(reportRepository.getKtasCount(memberId, "KTAS1"));
        dailyKtas.setKtas2(reportRepository.getKtasCount(memberId, "KTAS2"));
        dailyKtas.setKtas3(reportRepository.getKtasCount(memberId, "KTAS3"));
        dailyKtas.setKtas4(reportRepository.getKtasCount(memberId, "KTAS4"));
        dailyKtas.setKtas5(reportRepository.getKtasCount(memberId, "KTAS5"));
        return convertToDailyKtasResponse(dailyKtas);
    }

    private Report convertToReport(CallingCreateMessage message) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSSSS");

        Long paramedicMemberId = message.getMemberId();
        Long hospitalMemberId = message.getHospitalId();
        Long occurrenceId = message.getOccurrenceId();
        String ktas = message.getKtas();
        String ageGroup = message.getAgeGroup();
        String gender = message.getGender();
        LocalDateTime occurrenceTime = LocalDateTime.parse(message.getOccurrenceTime(), formatter);
        Double latitude = message.getLatitude();
        Double longitude = message.getLongitude();
        String address = message.getAddress();
        Long callingId = message.getId();
        String callingStatus = message.getStatus();
        LocalDateTime callingTime = LocalDateTime.now();


        return new Report(paramedicMemberId, hospitalMemberId, occurrenceId, ktas, ageGroup, gender,
                occurrenceTime, latitude, longitude, address, callingId, callingStatus, callingTime);
    }

    private ReportHeaderResponse convertToReportHeaderResponse(ReportHeader reportHeader) {
        Long today = reportHeader.getToday();
        Long todayApproved = reportHeader.getTodayApproved();
        Long todayRejected = reportHeader.getTodayRejected();
        Double avgResponseTime = reportHeader.getAvgResponseTime();
        Double avgTransferTime = reportHeader.getAvgTransferTime();
        return new ReportHeaderResponse(today, todayApproved, todayRejected, avgResponseTime, avgTransferTime);
    }

    private DailyKtasResponse convertToDailyKtasResponse(DailyKtas dailyKtas) {
        List<Long> ktas1 = dailyKtas.getKtas1();
        List<Long> ktas2 = dailyKtas.getKtas2();
        List<Long> ktas3 = dailyKtas.getKtas3();
        List<Long> ktas4 = dailyKtas.getKtas4();
        List<Long> ktas5 = dailyKtas.getKtas5();
        return new DailyKtasResponse(ktas1, ktas2, ktas3, ktas4, ktas5);
    }
}
