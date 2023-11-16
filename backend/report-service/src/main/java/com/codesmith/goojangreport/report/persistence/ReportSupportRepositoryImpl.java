package com.codesmith.goojangreport.report.persistence;

import com.codesmith.goojangreport.report.persistence.domain.DailyStatus;
import com.codesmith.goojangreport.report.persistence.domain.ReportHeader;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.codesmith.goojangreport.report.persistence.domain.QReport.report;

@Repository
public class ReportSupportRepositoryImpl implements ReportSupportRepository {
    private final EntityManager entityManager;
    private final JPAQueryFactory queryFactory;

    @Autowired
    public ReportSupportRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.queryFactory = new JPAQueryFactory(entityManager);
    }

    @Override
    public ReportHeader getHeaderValue(Long memberId) {
        return queryFactory
                .select(Projections.constructor(ReportHeader.class,
                        getToday(memberId),
                        getTodayApproved(memberId),
                        getTodayRejected(memberId),
                        getAvgResponseTime(memberId),
                        getAvgTransferTime(memberId)))
                .from(report)
                .fetchFirst();
    }

    @Override
    public DailyStatus getDailyStatus(Long memberId) {
        // TODO : 현재 데이터가 적어서 날짜랑 멤버 아이디 조건을 조작해놓음 추후에 주석 지우기
        LocalDate today = LocalDateTime.now().toLocalDate();
//        LocalDate today = LocalDate.of(2023, 11, 13);

        List<Tuple> tupleList = queryFactory
                .select(
                        report.callingStatus, report.report.id.count())
                .from(report)
                .where(
//                        report.hospitalMemberId.eq(memberId),
                        report.callingTime.between(today.atStartOfDay(), today.plusDays(1).atStartOfDay())
                )
                .groupBy(report.callingStatus)
                .fetch();
        return new DailyStatus(tupleList);
    }

    // TODO : where 절에 있는 주석 해제
    @Override
    public Map<Integer, Long> getTimeGroup(Long memberId) {
        Map<Integer, Long> timeGroup = new HashMap<>();
        for (int i = 0; i < 24; i+=2) {
            timeGroup.put(i, 0L);
        }
        List<Tuple> tupleList = queryFactory
                .select(
                        report.callingTime.hour().subtract(report.callingTime.hour().mod(2)),
                        report.id.count()
                )
                .from(report)
//                .where(report.hospitalMemberId.eq(memberId))
                .groupBy(report.callingTime.hour().subtract(report.callingTime.hour().mod(2)))
                .fetch();
        tupleList.forEach(o -> {
            Integer time = o.get(0, Integer.class);
            Long count = o.get(1, Long.class);
            timeGroup.put(time, count);
        });
        return timeGroup;
    }

    public JPQLQuery<Long> getToday(Long memberId) {
        LocalDate today = LocalDate.now();
        LocalDateTime startOfToday = today.atStartOfDay();
        LocalDateTime endOfToday = today.plusDays(1).atStartOfDay();

        return JPAExpressions
                .select(report.id.count())
                .from(report)
                .where(
                        report.occurrenceTime.between(startOfToday, endOfToday)
//                                .and(report.hospitalMemberId.eq(memberId))
                );
    }

    public JPQLQuery<Long> getTodayApproved(Long memberId) {
        LocalDate today = LocalDate.now();
        LocalDateTime startOfToday = today.atStartOfDay();
        LocalDateTime endOfToday = today.plusDays(1).atStartOfDay();

        return JPAExpressions
                .select(report.id.count())
                .from(report)
                .where(
                        report.occurrenceTime.between(startOfToday, endOfToday)
                                .and(report.callingStatus.eq("APPROVED").or(report.callingStatus.eq(("FIXED"))))
//                                .and(report.hospitalMemberId.eq(memberId))
                );
    }

    public JPQLQuery<Long> getTodayRejected(Long memberId) {
        LocalDate today = LocalDate.now();
        LocalDateTime startOfToday = today.atStartOfDay();
        LocalDateTime endOfToday = today.plusDays(1).atStartOfDay();

        return JPAExpressions
                .select(report.id.count())
                .from(report)
                .where(
                        report.occurrenceTime.between(startOfToday, endOfToday)
                                .and(report.callingStatus.eq("REJECTED"))
//                                .and(report.hospitalMemberId.eq(memberId))
                );
    }

    public JPQLQuery<Double> getAvgResponseTime(Long memberId) {
        return JPAExpressions
                .select(Expressions.numberTemplate(Long.class, "TIMESTAMPDIFF(SECOND, {1}, {0})",
                        report.responseTime, report.callingTime).avg())
                .from(report)
                .where(report.callingTime.isNotNull().and(report.responseTime.isNotNull()));
    }

    public JPQLQuery<Double> getAvgTransferTime(Long memberId) {
        return JPAExpressions
                .select(Expressions.numberTemplate(Long.class, "TIMESTAMPDIFF(SECOND, {1}, {0})",
                        report.arriveTime, report.responseTime).avg())
                .from(report)
                .where(report.callingTime.isNotNull().and(report.arriveTime.isNotNull()));
    }
}
