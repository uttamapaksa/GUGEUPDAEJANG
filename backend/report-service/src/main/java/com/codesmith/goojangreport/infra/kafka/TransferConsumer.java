package com.codesmith.goojangreport.infra.kafka;


import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TransferConsumer {
    private final ObjectMapper objectMapper;

    @KafkaListener(topics = "transfer-topic", groupId = "report-consumer")
    public void consumeTransferTopic(String message){
        try {
           System.out.println(message);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
