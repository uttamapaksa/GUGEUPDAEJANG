package com.codesmith.goojangcalling.calling.dto.request;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CallingListRequest {
    private int skip;
    private int limit;
    private String sortInfo;
    private String groupBy;
    private String filterValue;
}

/*

~/calling/history?skip=0&limit=10&sortInfo={"dir":1,"id":"address","name":"address","columnName":"address"}&groupBy=undefined&filterValue=[{"name":"id","type":"string","operator":"contains","value":""},{"name":"ageGroup","type":"select","operator":"eq","value":""},{"name":"gender","type":"select","operator":"eq","value":""},{"name":"tags","type":"string","operator":"contains","value":""},{"name":"address","type":"string","operator":"contains","value":""},{"name":"callingTime","type":"date","operator":"inrange","value":""},{"name":"replyTime","type":"date","operator":"inrange","value":""},{"name":"ktas","type":"select","operator":"eq","value":""}]

 */