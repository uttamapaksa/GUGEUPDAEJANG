import { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const SOCKET_SERVER_URL = 'https://k9b204a.p.ssafy.io:64419/calling-websocket';

interface Props {
  paramedicId: string;
}

const hospitalId = '3'

function ParamedicSocket({ paramedicId }: Props) {
  const [messages, setMessages] = useState<string[]>([]);
  const [messageToSend, setMessageToSend] = useState<string>('');
  const clientRef = useRef<Client | null>(null);

  // 연결 함수
  const connectSocket = () => {
    const sockJS = new SockJS(SOCKET_SERVER_URL);
    const stompClient = new Client({
      webSocketFactory: () => sockJS,
      reconnectDelay: 5 * 1000, // 재연결 딜레이 (5초)
    });

    stompClient.onConnect = () => {
      console.log('Connected to the WebSocket server.');
      subscribeTopic();
    };

    stompClient.activate();
    clientRef.current = stompClient; // useRef로 생성한 clientRef에 클라이언트 객체 할당
  };

  // 구독 함수
  const subscribeTopic = () => {
    if (clientRef.current) {
      clientRef.current.subscribe(`/topic/${paramedicId}`, (message) => {
        receiveMessage(message.body);
      });
    }
  };

  // 메시지 수신
  const receiveMessage = (message: any) => {
    console.log('Received message:', message);
    setMessages((prev) => [...prev, message]);
  };

  // 메시지 송신
  const sendMessage = () => {
    if (clientRef.current && messageToSend) {
      clientRef.current.publish({
        destination: `/app/${hospitalId}`,
        body: JSON.stringify({ name: '테스트이름', longitude: 35.123, latitude: 127.123 }),
      });
      setMessageToSend('');
    }
  };

  useEffect(() => {
    connectSocket();

    return () => {
      if (clientRef.current) {
        clientRef.current.deactivate();
      }
    };
  }, [paramedicId]);

  return (
    <div>
      <h3>Received messages for Hospital {hospitalId}</h3>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={messageToSend} onChange={(e) => setMessageToSend(e.target.value)} />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
}

export default ParamedicSocket;
