package com.codesmith.goojangmember.infra.publicdata;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;

@Component
@RequiredArgsConstructor
public class PublicDataClient {

    private final RestTemplate restTemplate;

    @Value("${publicdata.api.key}")
    private String serviceKey;

    public HashMap<String, Long> getRealTimeERBedInfo() throws JsonProcessingException {
        URI uri = UriComponentsBuilder
            .fromUriString("http://apis.data.go.kr")
            .path("/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire")
            .queryParam("serviceKey", serviceKey)
            .queryParam("pageNo",1)
            .queryParam("numOfRows",500)
            .encode(StandardCharsets.UTF_8)
            .build()
            .toUri();

        ResponseEntity<String> responseEntity = restTemplate.getForEntity(uri, String.class);
        String responseBody = responseEntity.getBody();

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode root = objectMapper.readTree(responseBody);

        JsonNode items = root.path("response").path("body").path("items").path("item");

        HashMap<String, Long> hospitalInfoMap = new HashMap<>();

        for (JsonNode item : items) {
            String hpid = item.path("hpid").asText();
            Long hvec = item.path("hvec").asLong();
            hospitalInfoMap.put(hpid, hvec);
        }

        return hospitalInfoMap;
    }
}
