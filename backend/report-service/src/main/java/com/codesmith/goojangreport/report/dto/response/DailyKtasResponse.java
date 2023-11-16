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
public class DailyKtasResponse {
    List<Long> ktas1;
    List<Long> ktas2;
    List<Long> ktas3;
    List<Long> ktas4;
    List<Long> ktas5;
}
