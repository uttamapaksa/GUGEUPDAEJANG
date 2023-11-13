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
public class DailyKtasResponse {
    List<Long>  KTAS1;
    List<Long>  KTAS2;
    List<Long>  KTAS3;
    List<Long>  KTAS4;
    List<Long>  KTAS5;
}
