package com.codesmith.goojangcalling.calling.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FilterValue {
    private String name;
    private String type;
    private String operator;
    private Object value;
}