package com.codesmith.goojangmember.infra.tmap;

import com.codesmith.goojangmember.infra.tmap.exception.FailedToReadDataException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;

@Component
@RequiredArgsConstructor
public class TmapClient {

    @Value("${tmap.api.key}")
    private String serviceKey;
    @Value("${tmap.api.url}")
    private String url;

    @Autowired
    private final ObjectMapper objectMapper;

    public HashMap<String, Long> getPathInfo(Double startX, Double startY, Double endX, Double endY) {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(url))
                    .header("accept", "application/json")
                    .header("appKey", serviceKey)
                    .header("content-type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString("{\"endX\":\"" + endX + "\",\"endY\":\"" + endY + "\",\"startX\":\"" + startX + "\",\"startY\":\"" + startY + "\",\"totalValue\":2}"))
                    .build();
            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

            JsonNode rootNode = objectMapper.readTree(response.body());
            JsonNode properties = rootNode.path("features").get(0).path("properties");

            HashMap<String, Long> pathInfo = new HashMap<>();
            pathInfo.put("distance", properties.get("totalDistance").asLong());
            pathInfo.put("time", properties.get("totalTime").asLong());

            return pathInfo;
        } catch (Exception e) {
            throw new FailedToReadDataException("Tmap API 데이터 로드 실패");
        }
    }
}
