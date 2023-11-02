import { useState, useEffect, useRef } from 'react';
// import { ParamedicSocketProps } from '../types/socket';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const CALLING_SERVER_URL = 'https://k9b204a.p.ssafy.io:64419/calling-websocket';
const TRANSFER_SERVER_URL = 'https://k9b204a.p.ssafy.io:64419/transfer-websocket';
const paramedicId = 1;
const hospitalId = 2;

// function ParamedicSocket({ paramedicId }: ParamedicSocketProps) {
function ParamedicSocket() {
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
      callingSocket.current.subscribe(`/topic/${paramedicId}`, (message) => {
        callingReceiveMessage(message.body);
      });
    }
  };
  const subscribeTransferTopic = () => {
    if (transferSocket.current) {
      transferSocket.current.subscribe(`/topic/${paramedicId}`, (message) => {
        transferReceiveMessage(message.body);
      });
    }
  };

  // 메시지 수신
  const callingReceiveMessage = (message: any) => {
    console.log('Received calling message:', message);
    setCaliingMessages((prev) => [...prev, message]);
  };
  const transferReceiveMessage = (message: any) => {
    console.log('Received transfer message:', message);
    setTransferMessages((prev) => [...prev, message]);
  };

  // 메시지 송신
  const callingSendMessage = () => {
    if (callingSocket.current && setCallingMessageToSend) {
      callingSocket.current.publish({
        destination: `/app/${hospitalId}`,
        body: JSON.stringify({ name: '테스트이름', longitude: 35.123, latitude: 127.123 }),
      });
      setCallingMessageToSend('');
    }
  };
  const transferSendMessage = () => {
    if (transferSocket.current && setTransferMessageToSend) {
      transferSocket.current.publish({
        destination: `/app/${hospitalId}`,
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
  }, [paramedicId]);

  return (
    <>
      <h3>Calling messages for Paramedic {paramedicId}</h3>
      <ul>
        {callingMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={callingMessageToSend} onChange={(e) => setCallingMessageToSend(e.target.value)} />
        <button onClick={callingSendMessage}>Calling Send Message</button>
      </div>
      <h3>Transfer messages for Paramedic {paramedicId}</h3>
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

export default ParamedicSocket;
