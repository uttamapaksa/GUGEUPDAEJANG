package com.codesmith.goojangcalling;

import com.codesmith.goojangcalling.calling.presentation.CallingController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class GoojangCallingApplication {
	public static void main(String[] args) {
		SpringApplication.run(GoojangCallingApplication.class, args);
	}

}
