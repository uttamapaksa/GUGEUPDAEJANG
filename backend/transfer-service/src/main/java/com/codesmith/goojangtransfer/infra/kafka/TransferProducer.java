package com.codesmith.goojangtransfer.infra.kafka;

import com.codesmith.goojangtransfer.transfer.persistence.domain.Transfer;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TransferProducer {
    private static final String TOPIC = "transfer-topic";
    private final ObjectMapper objectMapper;
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Async
    public void sendTransferMessage(Transfer transfer) {
        try {
            sendMessage(objectMapper.writeValueAsString(transfer));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    private void sendMessage(String message) {
        this.kafkaTemplate.send(TOPIC, message);
    }
}
