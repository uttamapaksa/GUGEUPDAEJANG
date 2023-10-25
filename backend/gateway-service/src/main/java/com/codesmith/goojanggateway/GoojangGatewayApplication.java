package com.codesmith.goojanggateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class GoojangGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoojangGatewayApplication.class, args);
	}

}
