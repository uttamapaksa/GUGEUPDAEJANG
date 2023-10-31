package com.codesmith.goojangmember.global.passport.application;

import com.codesmith.goojangmember.global.passport.dto.MemberInfo;
import com.codesmith.goojangmember.global.passport.dto.Passport;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Component
public class HMacPassportProvider implements PassportProvider {
    private final String HMacAlgo;
    private final String secretKey;
    private final ObjectMapper objectMapper;

    private MemberRepository memberRepository;

    public HMacPassportProvider(@Value("${passport.algorithm}") final String HMacAlgo,
                                @Value("${passport.key}") final String secretKey,
                                final ObjectMapper objectMapper) {
        this.HMacAlgo = HMacAlgo;
        this.secretKey = secretKey;
        this.objectMapper = objectMapper;
    }

    @Override
    public String generatePassport(MemberInfo memberInfo) {
        String passportEncoded;
        try {
            String memberInfoStr = objectMapper.writeValueAsString(memberInfo);
            String hashStr = createHMAC(memberInfoStr);

            Passport passport = new Passport(memberInfo, hashStr);
            String passportStr = objectMapper.writeValueAsString(passport);
            passportEncoded = Base64.getEncoder().encodeToString(passportStr.getBytes());
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        return passportEncoded;
    }

    @Override
    public MemberInfo getMemberInfo(String message) {
        return null;
    }

    @Override
    public boolean validatePassport(String message) {
        return false;
    }

    private String createHMAC(String message) {
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(), HMacAlgo);
        Mac mac = null;
        try {
            mac = Mac.getInstance(HMacAlgo);
            mac.init(secretKeySpec);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return Base64.getEncoder().encodeToString(mac.doFinal(message.getBytes()));
    }
}
