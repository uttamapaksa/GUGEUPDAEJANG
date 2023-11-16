package com.codesmith.goojangcalling.calling.dto.response;

import com.codesmith.goojangcalling.calling.persistence.domain.Occurrence;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class OccurrenceCreateResponse {
    private Long occurrenceId;

    public OccurrenceCreateResponse(Occurrence occurrence) {
        this.occurrenceId = occurrence.getId();
    }
}