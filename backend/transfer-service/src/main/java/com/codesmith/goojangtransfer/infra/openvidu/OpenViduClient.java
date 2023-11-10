package com.codesmith.goojangtransfer.infra.openvidu;

import com.codesmith.goojangtransfer.infra.openvidu.exception.OpenViduConnectionFailException;
import com.codesmith.goojangtransfer.infra.openvidu.exception.OpenViduCreateFailException;
import com.codesmith.goojangtransfer.infra.openvidu.exception.OpenViduSessionNotFoundException;
import io.openvidu.java.client.*;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OpenViduClient {

    @Value("${OPENVIDU_URL}")
    private String OPENVIDU_URL;

    @Value("${OPENVIDU_SECRET}")
    private String OPENVIDU_SECRET;

    private OpenVidu openVidu;

    @PostConstruct
    void init() {
        openVidu = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);
    }

    public Session createSession(final Long transferId) {
        String sessionId = "session" + transferId;
        SessionProperties properties = new SessionProperties.Builder()
                .customSessionId(sessionId)
                .build();
        try {
            return openVidu.createSession(properties);
        } catch (OpenViduException e) {
            throw new OpenViduCreateFailException("세션 생성에 실패했습니다.", e);
        }
    }

    public Connection getToken(Session session) {
        ConnectionProperties properties = new ConnectionProperties.Builder().build();
        try {
            return session.createConnection(properties);
        } catch (OpenViduException e) {
            throw new OpenViduConnectionFailException("연결에 실패했습니다.");
        }
    }

    public Session checkSession(Long transferId) {
        String inputSessionId = "session" + transferId;
        return openVidu.getActiveSessions().stream()
                .filter(o -> o.getSessionId().equals(inputSessionId))
                .findFirst()
                .orElse(null);
    }

    public void validateSession(Session session) {
        if (session == null) {
            throw new OpenViduSessionNotFoundException("세션이 존재하지 않습니다.");
        }
    }

    public void closeSession(Long transferId) {
        try {
            Session session = checkSession(transferId);
            validateSession(session);
            session.close();
        } catch (OpenViduException e) {
            throw new OpenViduSessionNotFoundException("세션이 존재하지 않습니다.", e);
        }
    }
}