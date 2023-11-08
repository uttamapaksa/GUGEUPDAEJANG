package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.FilterValue;
import com.codesmith.goojangcalling.calling.dto.SortInfo;
import com.codesmith.goojangcalling.calling.persistence.domain.CallingItem;
import com.codesmith.goojangcalling.calling.persistence.domain.QCalling;
import com.codesmith.goojangcalling.calling.persistence.domain.QTag;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.*;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

import static com.codesmith.goojangcalling.calling.persistence.domain.QCalling.calling;
import static com.codesmith.goojangcalling.calling.persistence.domain.QOccurrence.occurrence;
import static com.codesmith.goojangcalling.calling.persistence.domain.QTag.tag;
import static com.codesmith.goojangcalling.calling.persistence.domain.QOccurrenceTag.occurrenceTag;

@Repository
public class CallingSupportRepositoryImpl implements CallingSupportRepository {
    private final EntityManager entityManager;
    private final JPAQueryFactory queryFactory;

    @Autowired
    public CallingSupportRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.queryFactory = new JPAQueryFactory(entityManager);
    }

    @Override
    public List<CallingItem> findAllCallingByOptions(int skip, int limit, SortInfo sortInfo, FilterValue[] filterValues) {
        StringTemplate tagsConcatenated = Expressions.stringTemplate(
                "GROUP_CONCAT({0})", tag.name
        );

        List<CallingItem> result = queryFactory
                .select(Projections.constructor(CallingItem.class, calling.id, calling.occurrence.ageGroup, calling.occurrence.gender,
                        JPAExpressions.select(tagsConcatenated)
                                .from(occurrenceTag)
                                .join(occurrenceTag.occurrence, occurrence)
                                .join(occurrenceTag.tag, tag)
                                .where(occurrenceTag.occurrence.eq(calling.occurrence))
                                .groupBy(occurrenceTag.occurrence.id),
                        calling.occurrence.address, calling.createdAt, calling.responseTime, calling.status, calling.occurrence.ktas))
                .from(calling)
                .leftJoin(calling.occurrence, occurrence)
                .offset(skip)
                .limit(limit)
                .fetch();

        return result;
    }

    public static BooleanBuilder buildFilterPredicate(FilterValue[] filterValues) {
        BooleanBuilder predicate = new BooleanBuilder();

        /*
        [{"name":"id","type":"string","operator":"contains","value":""},
        {"name":"ageGroup","type":"select","operator":"eq","value":""},
        {"name":"gender","type":"select","operator":"eq","value":""},
        {"name":"tags","type":"string","operator":"contains","value":""},
        {"name":"address","type":"string","operator":"contains","value":""},
        {"name":"callingTime","type":"date","operator":"inrange","value":""},
        {"name":"replyTime","type":"date","operator":"inrange","value":""},
        {"name":"ktas","type":"select","operator":"eq","value":""}]
         */

        for (FilterValue filterValue : filterValues) {
            String name = filterValue.getName();
            String type = filterValue.getType();
            String operator = filterValue.getOperator();
            String value = filterValue.getValue();
        }

        return predicate;
    }
}
