package com.codesmith.goojangmember.global.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableAsync
public class AppConfig {

    @Bean
    public PasswordEncoder encryptConfig() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public ObjectMapper objectMapperConfig() {
        return new ObjectMapper();
    }
}
