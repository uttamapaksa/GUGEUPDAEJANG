package com.codesmith.goojangmember.auth.persistence;

import com.codesmith.goojangmember.auth.persistence.domain.RefreshToken;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {
}
