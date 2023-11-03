import { useState, useEffect, useRef } from 'react';
// import { HospitalSocketProps } from '../types/socket';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const CALLING_SERVER_URL = 'https://k9b204a.p.ssafy.io:64419/calling-websocket';
const TRANSFER_SERVER_URL = 'https://k9b204a.p.ssafy.io:64413/transfer-websocket';
const hospitalId = 2;
const paramedicId = 1;

// function HospitalSocket({ hospitalId }: HospitalSocketProps) {
function HospitalSocket() {
  const [callingMessages, setCaliingMessages] = useState<string[]>([]);
  const [callingMessageToSend, setCallingMessageToSend] = useState<string>('');
  const callingSocket = useRef<Client | null>(null);

  const [transferMessages, setTransferMessages] = useState<string[]>([]);
  const [transferMessageToSend, setTransferMessageToSend] = useState<string>('');
  const transferSocket = useRef<Client | null>(null);

  // 연결 함수
  const connectSocket = () => {
    // 요청 소켓 callingSocket
    const sockJS1 = new SockJS(CALLING_SERVER_URL);
    const stompClient1 = new Client({
      webSocketFactory: () => sockJS1,
      reconnectDelay: 5 * 1000, // 재연결 딜레이 (5초)
    });

    stompClient1.onConnect = () => {
      console.log('Connected to the Calling socket server.');
      subscribeCallingTopic();
    };

    stompClient1.activate();
    callingSocket.current = stompClient1; // useRef로 생성한 clientRef에 클라이언트 객체 할당

    // 이송 소켓 transferSocket
    const sockJS2 = new SockJS(TRANSFER_SERVER_URL);
    const stompClient2 = new Client({
      webSocketFactory: () => sockJS2,
      reconnectDelay: 5 * 1000, // 재연결 딜레이 (5초)
    });

    stompClient2.onConnect = () => {
      console.log('Connected to the Transfer socket server.');
      subscribeTransferTopic();
    };

    stompClient2.activate();
    transferSocket.current = stompClient2; // useRef로 생성한 clientRef에 클라이언트 객체 할당
  };

  // 구독 함수
  const subscribeCallingTopic = () => {
    if (callingSocket.current) {
      callingSocket.current.subscribe(`/topic/${hospitalId}`, (message) => {
        callingReceiveMessage(message.body);
      });
    }
  };
  const subscribeTransferTopic = () => {
    if (transferSocket.current) {
      transferSocket.current.subscribe(`/topic/${hospitalId}/location`, (message) => {
        transferReceiveMessage(message.body);
      });
    }
  };

  // 메시지 수신
  const callingReceiveMessage = (message: any) => {
    // 요청소켓 수신
    // 서버로부터 구급요청 리스트 수신
    // 서버로부터 수락 확인 수신
    console.log('Received calling message:', message);
    setCaliingMessages((prev) => [...prev, message]);
  };
  const transferReceiveMessage = (message: any) => {
    // 이송소켓 수신
    // 구급대원으로부터 현재 위치 수신
    console.log('Received transfer message:', message);
    setTransferMessages((prev) => [...prev, message]);
  };

  // 메시지 송신
  const callingSendMessage = () => {
    // 요청소켓 송신
    // 구급대원에게 수락/거절 여부 송신
    if (callingSocket.current && setCallingMessageToSend) {
      callingSocket.current.publish({
        destination: `/app/${paramedicId}`,
        body: JSON.stringify({ name: '테스트이름', longitude: 35.123, latitude: 127.123 }),
      });
      setCallingMessageToSend('');
    }
  };
  const transferSendMessage = () => {
    // 이송소켓 송신
    if (transferSocket.current && setTransferMessageToSend) {
      transferSocket.current.publish({
        destination: `/app/location/${paramedicId}`,
        body: JSON.stringify({ name: '테스트이름', longitude: 35.123, latitude: 127.123 }),
      });
      setTransferMessageToSend('');
    }
  };

  useEffect(() => {
    connectSocket();

    return () => {
      if (callingSocket.current) {
        callingSocket.current.deactivate();
      }
      if (transferSocket.current) {
        transferSocket.current.deactivate();
      }
    };
  }, [hospitalId]);

  return (
    <>
      <h3>Calling messages for Hospital {hospitalId}</h3>
      <ul>
        {callingMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={callingMessageToSend} onChange={(e) => setCallingMessageToSend(e.target.value)} />
        <button onClick={callingSendMessage}>Calling Send Message</button>
      </div>
      <h3>Transfer messages for Hospital {hospitalId}</h3>
      <ul>
        {transferMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={transferMessageToSend} onChange={(e) => setTransferMessageToSend(e.target.value)} />
        <button onClick={transferSendMessage}>Transfer Send Message</button>
      </div>
    </>
  );
}

export default HospitalSocket;