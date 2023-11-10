package com.codesmith.goojangcalling.infra.ncp;

import com.codesmith.goojangcalling.calling.dto.response.MediaTextResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

@Component
@Configuration
@RequiredArgsConstructor
public class NaverCloudClient {
    private final ObjectMapper objectMapper;

    @Value("${naver.cloud.id}")
    String CLIENT_ID;

    @Value("${naver.cloud.secret}")
    String CLIENT_SECRET;

    public String stt(File file) {
        StringBuffer response = new StringBuffer();

        try {
            String language = "Kor";
            String apiURL = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=" + language;
            URL url = new URL(apiURL);

            HttpURLConnection conn = (HttpURLConnection)url.openConnection();
            conn.setUseCaches(false);
            conn.setDoOutput(true);
            conn.setDoInput(true);
            conn.setRequestProperty("Content-Type", "application/octet-stream");
            conn.setRequestProperty("X-NCP-APIGW-API-KEY-ID", CLIENT_ID);
            conn.setRequestProperty("X-NCP-APIGW-API-KEY", CLIENT_SECRET);

            OutputStream outputStream = conn.getOutputStream();
            FileInputStream inputStream = new FileInputStream(file);
            byte[] buffer = new byte[4096];
            int bytesRead = -1;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            outputStream.flush();
            inputStream.close();
            BufferedReader br = null;
            int responseCode = conn.getResponseCode();
            if (responseCode == 200) {
                br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                System.out.println("error!!!!!!! responseCode= " + responseCode);
                br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            }
            String inputLine;

            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();
        } catch (Exception e) {
            System.out.println(e);
        }

        return getTextFromResponse(response.toString());
    }

    private String getTextFromResponse(String responseStr) {
        try {
            return objectMapper.readValue(responseStr, MediaTextResponse.class).getText();
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
