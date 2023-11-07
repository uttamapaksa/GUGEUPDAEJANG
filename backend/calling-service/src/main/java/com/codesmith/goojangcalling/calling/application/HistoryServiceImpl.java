package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.request.CallingHistoryRequest;
import com.codesmith.goojangcalling.calling.dto.response.HistoryListResponse;
import com.codesmith.goojangcalling.calling.persistence.CallingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HistoryServiceImpl implements HistoryService {
    private final CallingRepository callingRepository;
    @Override
    public List<HistoryListResponse> getCallingList(CallingHistoryRequest callingHistoryRequest) {
        return null;
    }
}
