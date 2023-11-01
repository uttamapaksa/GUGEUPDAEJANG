package com.codesmith.goojanggateway.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Principal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomPrincipal implements Principal {
    private Long id;
    private String email;

    @Override
    public String getName() {
        return email;
    }
}