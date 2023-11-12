package com.codesmith.goojangcalling.infra.kafka;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CallingProducer {
    private static final String TOPIC = "calling-topic";
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Async
    public void createCalling() {

    }

    @Async
    public void updateCalling() {

    }

    private void sendMessage(String message) {
        this.kafkaTemplate.send(TOPIC, message);
    }

}
