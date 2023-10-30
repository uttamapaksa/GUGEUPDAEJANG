package com.codesmith.goojangmember.infra.publicdata;

import com.codesmith.goojangmember.infra.publicdata.dto.HospitalInfoItem;
import com.codesmith.goojangmember.infra.publicdata.dto.Items;
import com.codesmith.goojangmember.infra.publicdata.dto.PublicDataResponse;
import com.codesmith.goojangmember.infra.publicdata.dto.Response;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Component
@RequiredArgsConstructor
public class PublicDataClient {

    private final RestTemplate restTemplate;

    @Value("${publicdata.api.key}")
    private String serviceKey;

    public List<HospitalInfoItem> getRealTimeERBedInfo() throws JsonProcessingException {

        String url = "http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire" +
            "?serviceKey=" + serviceKey +
            "&numOfRows=" + "500";

        System.out.println(serviceKey);

        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);

        System.out.println(responseEntity.getBody());

        ObjectMapper objectMapper = new ObjectMapper();
        TypeFactory typeFactory = objectMapper.getTypeFactory();
        CollectionType collectionType = typeFactory.constructCollectionType(List.class, HospitalInfoItem.class);
        Items items = objectMapper.readValue(responseEntity.getBody(), Items.class);
        return items.getItem();
    }
}
