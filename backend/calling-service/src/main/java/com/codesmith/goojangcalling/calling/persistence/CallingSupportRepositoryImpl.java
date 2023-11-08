package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.FilterValue;
import com.codesmith.goojangcalling.calling.dto.SortInfo;
import com.codesmith.goojangcalling.calling.persistence.domain.CallingItem;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.*;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

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
                                ExpressionUtils.as(JPAExpressions
                                        .select(tagsConcatenated)
                                        .from(occurrenceTag)
                                        .join(occurrenceTag.occurrence, occurrence)
                                        .join(occurrenceTag.tag, tag)
                                        .where(occurrenceTag.occurrence.eq(calling.occurrence))
                                        .groupBy(occurrenceTag.occurrence.id), "tagStr"),
                        calling.occurrence.address, calling.createdAt, calling.responseTime, calling.status, calling.occurrence.ktas))
                .from(calling)
                .leftJoin(calling.occurrence, occurrence)
//                .where(getBuildFilterPredicate(filterValues))
                .orderBy(getOrderByExpression(sortInfo))
                .offset(skip)
                .limit(limit)
                .fetch();

        return result;
    }

    @Override
    public Long countCallingByOptions(FilterValue[] filterValues) {
        return (long) queryFactory
                .select(calling.count())
                .from(calling)
                .leftJoin(calling.occurrence, occurrence)
                .where(getBuildFilterPredicate(filterValues))
                .fetch()
                .size();
    }

    private OrderSpecifier getOrderByExpression(SortInfo sortInfo) {
        if (sortInfo == null) {
            return new OrderSpecifier(Order.DESC, new PathBuilder(CallingItem.class, "calling").get("id"));
        }

        if (sortInfo.getColumnName().equals("tags")) {
            StringPath stringPath = Expressions.stringPath("tagStr");
            return sortInfo.getDir() == 1? stringPath.asc() : stringPath.desc();
        }

        Order dir = sortInfo.getDir() == 1 ? Order.ASC : Order.DESC;
        String variable = sortInfo.getColumnName().equals("id") || sortInfo.getColumnName().equals("callingTime")
                            || sortInfo.getColumnName().equals("replyTime") ||sortInfo.getColumnName().equals("status") ? "calling" : "calling.occurrence";
        PathBuilder orderByExpression = new PathBuilder(CallingItem.class, variable);
        String columnName = sortInfo.getColumnName();
        columnName = columnName.equals("callingTime")? "createdAt" : columnName;
        columnName = columnName.equals("replyTime")? "responseTime" : columnName;

        return new OrderSpecifier(dir, orderByExpression.get(columnName));
    }



    public static BooleanBuilder getBuildFilterPredicate(FilterValue[] filterValues) {
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
