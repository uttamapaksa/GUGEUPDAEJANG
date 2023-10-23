package com.codesmith.goojangmember;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GoojangMemberApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoojangMemberApplication.class, args);
	}

}
