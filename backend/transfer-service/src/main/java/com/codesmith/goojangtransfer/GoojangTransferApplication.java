package com.codesmith.goojangtransfer;

import jakarta.annotation.PostConstruct;
import com.codesmith.goojangtransfer.member.application.MemberService;
import com.codesmith.goojangtransfer.member.application.MemberServiceImpl;
import com.codesmith.goojangtransfer.member.persistence.MemberRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

import java.util.TimeZone;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class GoojangTransferApplication {

	@PostConstruct
	public void setTimeZone() {
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
	}

	public static void main(String[] args) {
		SpringApplication.run(GoojangTransferApplication.class, args);

	}

}
