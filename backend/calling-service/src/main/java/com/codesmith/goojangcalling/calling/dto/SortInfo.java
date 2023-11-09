package com.codesmith.goojangcalling.calling.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SortInfo {
    private int dir;
    private String id;
    private String name;
    private String columnName;
    private String type;
}