package com.codesmith.goojangreport.report.dto.message;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CallingCreateMessage {
    private Long id;
    private String createdAt;

    private Long occurrenceId;
    private String occurrenceTime;
    private Long memberId;
    private Long hospitalId;
    private String ktas;
    private String ageGroup;
    private String gender;
    private String description;
    private Double latitude;
    private Double longitude;
    private String address;
    private List<String> tags;
    private List<String> files;

    private Double distance;
    private Long duration;
    private String status;
}
