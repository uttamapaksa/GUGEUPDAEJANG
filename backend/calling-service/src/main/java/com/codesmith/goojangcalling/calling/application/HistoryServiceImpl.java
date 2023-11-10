package com.codesmith.goojangcalling.calling.application;

import com.codesmith.goojangcalling.calling.dto.FilterValue;
import com.codesmith.goojangcalling.calling.dto.SortInfo;
import com.codesmith.goojangcalling.calling.dto.request.CallingListRequest;
import com.codesmith.goojangcalling.calling.dto.response.CallingItemResponse;
import com.codesmith.goojangcalling.calling.dto.response.CallingListResponse;
import com.codesmith.goojangcalling.calling.dto.response.MediaTextResponse;
import com.codesmith.goojangcalling.calling.persistence.CallingRepository;
import com.codesmith.goojangcalling.calling.persistence.domain.CallingItem;
import com.codesmith.goojangcalling.infra.ncp.NaverCloudClient;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.cloud.speech.v1.*;
import com.google.protobuf.ByteString;
import lombok.RequiredArgsConstructor;
import org.apache.commons.fileupload.InvalidFileNameException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.google.cloud.speech.v1.RecognitionConfig.AudioEncoding;

import java.io.File;
import java.io.FileOutputStream;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HistoryServiceImpl implements HistoryService {
    private final CallingRepository callingRepository;
    private final ObjectMapper objectMapper;
    private final NaverCloudClient naverCloudClient;

    @Override
    public CallingListResponse getCallingList(Long memberId, CallingListRequest callingHistoryRequest) {
        SortInfo sortInfo = getSortInfo(callingHistoryRequest.getSortInfo());
        FilterValue[] filterValues = getFilterValues(callingHistoryRequest.getFilterValue());

        Long totalCount = callingRepository.countCallingByOptions(memberId, filterValues);
        List<CallingItem> callings = callingRepository.findAllCallingByOptions(memberId, callingHistoryRequest.getSkip(), callingHistoryRequest.getLimit(), sortInfo, filterValues);
        return new CallingListResponse(convertToCallingListResponse(callings), totalCount);
    }

    @Override
    public MediaTextResponse getTextByFile(MultipartFile file) {
        try {
            File convFile = new File(Objects.requireNonNull(file.getOriginalFilename()));
            convFile.createNewFile();
            FileOutputStream fos = new FileOutputStream(convFile);
            fos.write(file.getBytes());
            fos.close();

            String resp = naverCloudClient.stt(convFile);
            return new MediaTextResponse(resp);
        } catch (Exception e) {
            throw new InvalidFileNameException("잘못된 파일", null);
        }
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
