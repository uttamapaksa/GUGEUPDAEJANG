package com.codesmith.goojangtransfer.transfer.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OccurrenceInfoResponse {
    private String address;
    private String ageGroup;
    private String gender;
    private String ktas;
    private String description;
    private String memberName;
    private List<String> tags;
    private List<String> files;
    private Long callingId;
    private LocalDateTime createdAt;
    private Long hospitalId; // 얘도 병원 이름으로 받고 싶다... 내가 왜 id라 그랬을까..
}
