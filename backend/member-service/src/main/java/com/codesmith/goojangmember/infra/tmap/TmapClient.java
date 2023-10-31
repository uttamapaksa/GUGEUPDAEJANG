package com.codesmith.goojangmember.infra.tmap;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Component
@RequiredArgsConstructor
public class TmapClient {

    @Value("${tmap.api.key}")
    private String serviceKey; //티맵 API 앱키 설정

    public void getPathInfo(Double startX, Double startY, Double endX, Double endY) {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://apis.openapi.sk.com/tmap/routes?version=1"))
                    .header("accept", "application/json")
                    .header("appKey", serviceKey)
                    .header("content-type", "application/json")
                    .method("POST", HttpRequest.BodyPublishers.ofString("{\"endX\":\"" + endX + "\",\"endY\":\"" + endY + "\",\"startX\":\"" + startX + "\",\"startY\":\"" + startY + "\",\"totalValue\":2}"))
                    .build();
            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
