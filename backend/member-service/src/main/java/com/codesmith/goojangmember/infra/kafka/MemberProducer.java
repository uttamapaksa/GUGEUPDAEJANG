package com.codesmith.goojangmember.infra.kafka;

import com.codesmith.goojangmember.member.dto.message.MemberMessage;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberProducer {
    private static final String TOPIC = "member-topic";
    private final KafkaTemplate<String, String> kafkaTemplate;
    private final MemberRepository memberRepository;
    private final ObjectMapper objectMapper;

    public void sendMessage(String message) {
        this.kafkaTemplate.send(TOPIC, message);
    }

    @Async
    public void produceMessage(Long memberId) {
        try {
            Member member = memberRepository.findById(memberId).get();
            sendMessage(objectMapper.writeValueAsString(convertToMemberMessage(member)));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    private MemberMessage convertToMemberMessage(Member member) {
        return new MemberMessage(member.getId(), member.getEmail(), member.getName(), member.getImageUrl());
    }
}
