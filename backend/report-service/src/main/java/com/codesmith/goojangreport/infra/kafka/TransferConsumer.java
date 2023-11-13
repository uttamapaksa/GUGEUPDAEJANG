package com.codesmith.goojangreport.infra.kafka;


import com.codesmith.goojangreport.report.dto.message.TransferMessage;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TransferConsumer {
    private final ObjectMapper objectMapper;

    @KafkaListener(topics = "transfer-topic", groupId = "report-consumer-dev")
    public void consumeTransferTopic(String message){
        try {
            TransferMessage transfer = objectMapper.readValue(message, TransferMessage.class);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
