package com.codesmith.goojangcalling.calling.persistence;

import com.codesmith.goojangcalling.calling.dto.FilterValue;
import com.codesmith.goojangcalling.calling.dto.SortInfo;
import com.codesmith.goojangcalling.calling.persistence.domain.CallingItem;
import com.codesmith.goojangcalling.calling.persistence.domain.QCalling;
import com.codesmith.goojangcalling.calling.persistence.domain.QTag;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.StringPath;
import com.querydsl.core.types.dsl.StringTemplate;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import io.micrometer.common.util.StringUtils;
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
//        System.out.println("==========================");
//        System.out.println(skip);
//        System.out.println(limit);
//        System.out.println(sortInfo);
//        System.out.println(filterValues[0]);


        JPAQuery<String> tagQuery = new JPAQuery<>(entityManager)
                .select(occurrenceTag.tag.name)
                .from(occurrenceTag)
                .where(occurrenceTag.occurrence.id.eq(occurrence.id));

        List<CallingItem> result = queryFactory
                .select(Projections.constructor(CallingItem.class, calling.id, calling.occurrence.ageGroup, calling.occurrence.gender, calling.occurrence.address, calling.createdAt, calling.responseTime, calling.status, calling.occurrence.ktas))
                .from(calling)
                .leftJoin(calling.occurrence, occurrence)
                .fetch();

        for (CallingItem item : result) {
            List<String> tags = tagQuery
                    .where(occurrenceTag.occurrence.id.eq(item.getId()))
                    .fetch();
            String concatenatedTags = String.join(", ", tags);
            item.setTags(concatenatedTags);
        }

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
