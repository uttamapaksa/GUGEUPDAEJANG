package com.codesmith.goojangreport.infra.kafka;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CallingConsumer {
    private final ObjectMapper objectMapper;

    @KafkaListener(topics = "calling-topic", groupId = "report-consumer")
    public void consumeCallingTopic(String message){
        try {
            System.out.println(message);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
