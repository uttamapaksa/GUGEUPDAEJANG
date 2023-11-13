package com.codesmith.goojangreport.report.dto.reponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MonthlyApprovedResponse {
    private List<Long> total;
    private List<Long> approved;
}
