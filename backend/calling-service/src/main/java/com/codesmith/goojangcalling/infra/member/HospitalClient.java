package com.codesmith.goojangcalling.infra.member;

import com.codesmith.goojangcalling.calling.dto.response.HospitalSearchResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
public class HospitalClient {
    private final WebClient webClient;

    public HospitalClient(@Value("${webclient.url.member}") String baseUrl) {
        this.webClient = WebClient.builder()
                .baseUrl(baseUrl)
                .build();
    }

    public Mono<List<HospitalSearchResponse>> searchHospital(Double latitude, Double longitude, Double distance) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/hospital")
                        .queryParam("latitude", latitude)
                        .queryParam("longitude", longitude)
                        .queryParam("distance", distance)
                        .build())
                .retrieve()
                .bodyToFlux(HospitalSearchResponse.class)
                .collectList();
    }
}