package com.codesmith.goojangtransfer.infra.openvidu;

import com.codesmith.goojangtransfer.infra.openvidu.exception.OpenViduConnectionFailException;
import com.codesmith.goojangtransfer.infra.openvidu.exception.OpenViduCreateFailException;
import io.openvidu.java.client.*;
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

    public Session createSession(final Long transferId) {
        OpenVidu openVidu = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);
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
}