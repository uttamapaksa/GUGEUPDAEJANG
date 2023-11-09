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
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.ResolverStyle;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

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
    public List<CallingItem> findAllCallingByOptions(Long memberId, int skip, int limit, SortInfo sortInfo, FilterValue[] filterValues) {
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
                .where(getBuildFilterPredicate(memberId, filterValues))
                .orderBy(getOrderByExpression(sortInfo))
                .offset(skip)
                .limit(limit)
                .fetch();

        return result;
    }

    @Override
    public Long countCallingByOptions(Long memberId, FilterValue[] filterValues) {
        return queryFactory
                .select(calling.count())
                .from(calling)
                .leftJoin(calling.occurrence, occurrence)
                .where(getBuildFilterPredicate(memberId, filterValues))
                .fetch()
                .get(0);
    }

    private OrderSpecifier getOrderByExpression(SortInfo sortInfo) {
        if (sortInfo == null) {
            return new OrderSpecifier(Order.DESC, new PathBuilder<>(CallingItem.class, "calling").get("id"));
        }

        if (sortInfo.getColumnName().equals("tags")) {
            StringPath stringPath = Expressions.stringPath("tagStr");
            return sortInfo.getDir() == 1? stringPath.asc() : stringPath.desc();
        }

        Order dir = sortInfo.getDir() == 1 ? Order.ASC : Order.DESC;
        PathBuilder<CallingItem> orderByExpression = getPath(sortInfo.getColumnName());
        String columnName = getColumnName(sortInfo.getColumnName());

        return new OrderSpecifier(dir, orderByExpression.get(columnName));
    }



    private BooleanBuilder getBuildFilterPredicate(Long memberId, FilterValue[] filterValues) {
        BooleanBuilder predicate = new BooleanBuilder();
        // TODO: 나중에 아래 주석 제거해서 사용자별로 다른 결과 보여주기
//        predicate.and(calling.memberId.eq(memberId));

        for (FilterValue filterValue : filterValues) {
            if (filterValue.getValue().equals("")) continue;
            PathBuilder<CallingItem> path = getPath(filterValue.getName());
            String columnName = getColumnName(filterValue.getName());

            if (filterValue.getType().equals("string")) {
                StringPath field = path.getString(columnName);
                predicate.and(field.contains(filterValue.getValue().toString()));
                continue;
            }

            if (filterValue.getType().equals("select")) {
                StringPath field = path.getString(columnName);
                predicate.and(field.eq(filterValue.getValue().toString()));
                continue;
            }

            DateTimePath<LocalDateTime> dateField = path.getDateTime(columnName, LocalDateTime.class);
            Map<String, String> map = (LinkedHashMap) filterValue.getValue();

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm", Locale.ENGLISH);
            if (!map.get("start").equals("")) {
                LocalDateTime startDate = LocalDateTime.parse(map.get("start"), formatter);
                predicate.and(dateField.after(startDate));
            }

            if (!map.get("end").equals("")) {
                LocalDateTime endDate = LocalDateTime.parse(map.get("end"), formatter);
                predicate.and(dateField.before(endDate));
            }
        }

        return predicate;
    }

    private PathBuilder<CallingItem> getPath(String fieldName) {
        String variable = fieldName.equals("id") || fieldName.equals("callingTime")
                || fieldName.equals("replyTime") || fieldName.equals("status") ? "calling" : "calling.occurrence";
        return new PathBuilder<>(CallingItem.class, variable);
    }

    private String getColumnName(String fieldName) {
        if (fieldName.equals("callingTime")) return "createdAt";
        if (fieldName.equals("replyTime")) return "responseTime";
        return fieldName;
    }
}