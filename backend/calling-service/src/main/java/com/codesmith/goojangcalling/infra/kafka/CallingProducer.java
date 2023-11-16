package com.codesmith.goojangcalling.infra.kafka;

import com.codesmith.goojangcalling.calling.dto.message.CallingCreateMessage;
import com.codesmith.goojangcalling.calling.dto.message.CallingStatusMessage;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CallingProducer {
    private static final String TOPIC = "calling-topic";
    private final ObjectMapper objectMapper;
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Async
    public void sendCreateMessage(CallingCreateMessage callingCreateMessage) {
        try {
            sendMessage(objectMapper.writeValueAsString(callingCreateMessage));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Async
    public void sendUpdateMessage(CallingStatusMessage callingStatusMessage) {
        try {
            sendMessage(objectMapper.writeValueAsString(callingStatusMessage));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }

    private void sendMessage(String message) {
        this.kafkaTemplate.send(TOPIC, message);
    }

}
