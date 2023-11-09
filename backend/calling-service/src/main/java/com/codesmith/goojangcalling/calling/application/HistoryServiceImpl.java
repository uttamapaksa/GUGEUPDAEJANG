package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.FilterValue;
import com.codesmith.goojangcalling.calling.dto.SortInfo;
import com.codesmith.goojangcalling.calling.dto.request.CallingListRequest;
import com.codesmith.goojangcalling.calling.dto.response.CallingItemResponse;
import com.codesmith.goojangcalling.calling.dto.response.CallingListResponse;
import com.codesmith.goojangcalling.calling.persistence.CallingRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.CallingItem;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HistoryServiceImpl implements HistoryService {
    private final CallingRepository callingRepository;
    private final ObjectMapper objectMapper;
    @Override
    public CallingListResponse getCallingList(Long memberId, CallingListRequest callingHistoryRequest) {
        SortInfo sortInfo = getSortInfo(callingHistoryRequest.getSortInfo());
        FilterValue[] filterValues = getFilterValues(callingHistoryRequest.getFilterValue());

        Long totalCount = callingRepository.countCallingByOptions(memberId, filterValues);
        List<CallingItem> callings = callingRepository.findAllCallingByOptions(memberId, callingHistoryRequest.getSkip(), callingHistoryRequest.getLimit(), sortInfo, filterValues);
        return new CallingListResponse(convertToCallingListResponse(callings), totalCount);
    }

    private FilterValue[] getFilterValues(String filterStr) {
        FilterValue[] filterValues = null;
        try {
            filterValues = objectMapper.readValue(filterStr, FilterValue[].class);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return filterValues;
    }

    private SortInfo getSortInfo(String sortStr) {
        if (sortStr == null || sortStr.equals("undefined") || sortStr.equals("null")) return null;
        SortInfo sortInfo = null;
        try {
            sortInfo = objectMapper.readValue(sortStr, SortInfo.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return sortInfo;
    }

    private List<CallingItemResponse> convertToCallingListResponse(List<CallingItem> callingItemList) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm");

        return callingItemList.stream()
                .map(callingItem -> new CallingItemResponse(
                        callingItem.getId(),
                        callingItem.getAgeGroup().name(),
                        callingItem.getGender().name(),
                        callingItem.getTags() == null? "" : callingItem.getTags(),
                        callingItem.getAddress() == null? "" : callingItem.getAddress(),
                        callingItem.getCallingTime().format(formatter),
                        callingItem.getReplyTime() == null ? "0000/00/00 00:00" : callingItem.getReplyTime().format(formatter),
                        callingItem.getStatus().name(),
                        callingItem.getKtas().name()
                ))
                .collect(Collectors.toList());
    }
}
