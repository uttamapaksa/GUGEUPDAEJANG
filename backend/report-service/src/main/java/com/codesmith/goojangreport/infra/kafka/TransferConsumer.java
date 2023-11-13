package com.codesmith.goojangreport.infra.kafka;


import com.codesmith.goojangreport.report.application.ReportService;
import com.codesmith.goojangreport.report.dto.message.TransferMessage;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TransferConsumer {
    private final ObjectMapper objectMapper;
    private final ReportService reportService;

    @KafkaListener(topics = "transfer-topic", groupId = "report-consumer")
    public void consumeTransferTopic(String message){
        try {
            TransferMessage transfer = objectMapper.readValue(message, TransferMessage.class);
            reportService.updateReport(transfer);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
