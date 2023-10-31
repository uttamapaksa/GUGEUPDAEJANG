package com.codesmith.goojangmember.auth.application;

import com.codesmith.goojangmember.auth.dto.request.AuthLoginRequest;
import com.codesmith.goojangmember.auth.dto.request.PassportCreateRequest;
import com.codesmith.goojangmember.auth.dto.response.AuthLoginResponse;
import com.codesmith.goojangmember.auth.dto.response.PassportCreateResponse;
import com.codesmith.goojangmember.auth.exception.InvalidLoginException;
import com.codesmith.goojangmember.auth.exception.InvalidTokenException;
import com.codesmith.goojangmember.auth.persistence.RefreshTokenRepository;
import com.codesmith.goojangmember.auth.persistence.domain.RefreshToken;
import com.codesmith.goojangmember.global.passport.application.PassportProvider;
import com.codesmith.goojangmember.global.passport.dto.MemberInfo;
import com.codesmith.goojangmember.global.passport.dto.Passport;
import com.codesmith.goojangmember.member.application.MemberValidator;
import com.codesmith.goojangmember.member.persistence.MemberRepository;
import com.codesmith.goojangmember.member.persistence.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService {
    private final TokenProvider tokenProvider;
    private final MemberRepository memberRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final MemberValidator memberValidator;
    private final PasswordEncoder passwordEncoder;
    private final PassportProvider passportProvider;

    public AuthLoginResponse login(AuthLoginRequest authLoginRequest) {
        memberValidator.doesEmailExist(authLoginRequest.getEmail());
        Member member = memberRepository.findByEmail(authLoginRequest.getEmail());

        if (!passwordEncoder.matches(authLoginRequest.getPassword(), member.getPassword())) {
            throw new InvalidLoginException("잘못된 로그인 정보");
        }

        String accessToken = tokenProvider.generateAccessToken(member.getEmail());
        String refreshToken = tokenProvider.generateRefreshToken(member.getEmail());
        refreshTokenRepository.save(new RefreshToken(refreshToken, member.getEmail()));

        return new AuthLoginResponse(accessToken, refreshToken);
    }

    public PassportCreateResponse createPassport(PassportCreateRequest passportCreateRequest) {
        String email = tokenProvider.getPayload(passportCreateRequest.getAccessToken());
        memberValidator.doesEmailExist(email);
        Member member = memberRepository.findByEmail(email);
        MemberInfo memberInfo = new MemberInfo(member.getId(), member.getEmail(), member.getName(), member.getImageUrl(), member.getRole().getKey());

        return new PassportCreateResponse(passportProvider.generatePassport(memberInfo));
    }
}
