package com.codesmith.goojangreport.report.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AgeGroupResponse {
    private List<Long> totalCountList;
    private List<Long> maleCountList;
    private List<Long> femaleCountList;
}
