package com.codesmith.goojangreport.report.application;

import com.codesmith.goojangreport.report.dto.message.CallingCreateMessage;
import com.codesmith.goojangreport.report.dto.message.CallingStatusMessage;
import com.codesmith.goojangreport.report.dto.message.TransferMessage;
import com.codesmith.goojangreport.report.dto.response.*;
import com.codesmith.goojangreport.report.persistence.ReportRepository;
import com.codesmith.goojangreport.report.persistence.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

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
        List<DailyKtas> dailyKtas = reportRepository.getDailyKtas(memberId);
        return convertToDailyKtasResponse(dailyKtas);
    }

    @Override
    public MonthlyApprovedResponse getMonthlyApproved(Long memberId, Long year) {
        List<MonthlyApproved> monthlyApproved = reportRepository.getMonthlyApproved(memberId, year);
        return convertToMonthlyApprovedResponse(monthlyApproved);
    }

    @Override
    public DailyStatusResponse getDailyStatus(Long memberId) {
        DailyStatus dailyStatus = reportRepository.getDailyStatus(memberId);
        return new DailyStatusResponse(dailyStatus);
    }

    @Override
    public CallingPerTimeResponse getTimeGroup(Long memberId) {
        Map<Integer, Long> timeGroup = reportRepository.getTimeGroup(memberId);
        List<Long> countList = new ArrayList<>();
        for (int i = 0; i <= 22; i += 2) {
            countList.add(timeGroup.get(i));
        }
        return new CallingPerTimeResponse(countList);
    }

    @Override
    public AgeGroupResponse getAgeGroup(Long memberId) {
        // TODO : memberId 지우기
        memberId = 1379L;
        return convertToAgeGroupResponse(reportRepository.getAgeGroup(memberId));
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

    private DailyKtasResponse convertToDailyKtasResponse(List<DailyKtas> dailyKtas) {
        DailyKtasResponse dailyKtasResponse = new DailyKtasResponse();

        dailyKtasResponse.setKtas1(dailyKtas.stream()
            .map(DailyKtas::getKtas1)
            .collect(Collectors.toList()));

        dailyKtasResponse.setKtas2(dailyKtas.stream()
            .map(DailyKtas::getKtas2)
            .collect(Collectors.toList()));

        dailyKtasResponse.setKtas3(dailyKtas.stream()
            .map(DailyKtas::getKtas3)
            .collect(Collectors.toList()));

        dailyKtasResponse.setKtas4(dailyKtas.stream()
            .map(DailyKtas::getKtas4)
            .collect(Collectors.toList()));

        dailyKtasResponse.setKtas5(dailyKtas.stream()
            .map(DailyKtas::getKtas5)
            .collect(Collectors.toList()));

        return dailyKtasResponse;
    }

    private MonthlyApprovedResponse convertToMonthlyApprovedResponse(List<MonthlyApproved> monthlyApproved) {
        MonthlyApprovedResponse monthlyApprovedResponse = new MonthlyApprovedResponse();

        monthlyApprovedResponse.setTotal(monthlyApproved.stream()
            .map(MonthlyApproved::getTotal)
            .collect(Collectors.toList()));

        monthlyApprovedResponse.setApproved(monthlyApproved.stream()
            .map(MonthlyApproved::getApproved)
            .collect(Collectors.toList()));

        return monthlyApprovedResponse;
    }

    private AgeGroupResponse convertToAgeGroupResponse(List<AgeGroup> ageGroup) {
        List<Long> maleCountList = ageGroup.stream()
                .filter(o -> "MALE".equalsIgnoreCase(o.getGender()))
                .map(o -> o.getCount())
                .collect(Collectors.toList());

        List<Long> femaleCountList = ageGroup.stream()
                .filter(o -> "FEMALE".equalsIgnoreCase(o.getGender()))
                .map(o -> o.getCount())
                .collect(Collectors.toList());

        List<Long> combinedCountList = IntStream.range(0, maleCountList.size())
                .mapToObj(i -> maleCountList.get(i) + femaleCountList.get(i))
                .collect(Collectors.toList());

        return new AgeGroupResponse(combinedCountList, maleCountList, femaleCountList);
    }
}
