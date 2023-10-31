package com.codesmith.goojangmember.infra.publicdata;

import com.codesmith.goojangmember.infra.publicdata.exception.FailedToReadDataException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.*;
import java.util.HashMap;

@Component
@RequiredArgsConstructor
public class PublicDataClient {

    @Value("${publicData.api.key}")
    private String serviceKey;

    public HashMap<String, Long> getRealTimeERBedInfo() {
        try {
            StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire");
            urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=" + serviceKey);
            urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
            urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("500", "UTF-8"));
            URL url = new URL(urlBuilder.toString());
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();
            conn.disconnect();

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(sb.toString());

            JsonNode items = rootNode.path("response").path("body").path("items").path("item");

            HashMap<String, Long> resultMap = new HashMap<>();

            for (JsonNode item : items) {
                String hpid = item.path("hpid").asText();
                long hvec = item.path("hvec").asLong();
                resultMap.put(hpid, hvec);
            }

            return resultMap;
        } catch (Exception e) {
            throw new FailedToReadDataException("실시간 응급실 정보를 읽어오는데 실패했습니다.");
        }
    }
}
