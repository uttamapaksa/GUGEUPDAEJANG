package com.codesmith.goojangtransfer;

import com.codesmith.goojangtransfer.member.application.MemberService;
import com.codesmith.goojangtransfer.member.application.MemberServiceImpl;
import com.codesmith.goojangtransfer.member.persistence.MemberRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class GoojangTransferApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoojangTransferApplication.class, args);

	}

}
