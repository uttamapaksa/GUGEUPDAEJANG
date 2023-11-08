import { useEffect, useRef } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { memberInfoState } from '../recoils/AuthAtoms';
import {
  HospitalListState,
  isTransferringState,
  fixedCallingState,
  transferHospitalIdState,
} from '/src/recoils/ParamedicAtoms';
import { currentPosition } from '../recoils/HospitalAtoms';
import { HospitalTransferParaItem } from '../types/map';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const CALLING_SERVER_URL = 'https://k9b204a.p.ssafy.io:64419/calling-websocket';
const TRANSFER_SERVER_URL = 'https://k9b204a.p.ssafy.io:64413/transfer-websocket';

function ParamedicSocket() {
  const paramedicId = useRecoilValue(memberInfoState).memberId;
  const hospitalId = useRecoilValue(transferHospitalIdState);
  const transferring = useRecoilValue(isTransferringState);
  const fixedCalling = useRecoilValue(fixedCallingState);
  const position = useRecoilValue(currentPosition);
  const callingSocket = useRef<Client | null>(null);
  const transferSocket = useRef<Client | null>(null);
  const [hospitals, setHospitals] = useRecoilState(HospitalListState);

  // 연결 함수
  const connectSocket = () => {
    // 요청 소켓(callingSocket) 연결
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

    // 이송 소켓(transferSocket) 연결
    const sockJS2 = new SockJS(TRANSFER_SERVER_URL);
    const stompClient2 = new Client({
      webSocketFactory: () => sockJS2,
      reconnectDelay: 5 * 1000,
    });

    stompClient2.onConnect = () => {
      console.log('Connected to the Transfer socket server.');
      subscribeTransferTopic();
    };

    stompClient2.activate();
    transferSocket.current = stompClient2;
  };

  // 구독 함수
  const subscribeCallingTopic = () => {
    if (callingSocket.current) {
      // 요청 소켓
      callingSocket.current.subscribe(`/topic/${paramedicId}`, (message) => {
        callingReceiveMessage(JSON.parse(message.body));
      });
      // 요청 변경 소켓
      callingSocket.current.subscribe(`/topic/status/${paramedicId}`, (message) => {
        callingStatusMessage(JSON.parse(message.body));
      });
    }
  };
  const subscribeTransferTopic = () => {
    if (transferSocket.current) {
      // 이송 소켓
      transferSocket.current.subscribe(`/topic/${paramedicId}/location`, (message) => {
        console.log('subscribe transferSocket');
        transferReceiveMessage(message.body);
      });
    }
  };

  // 메시지 수신
  const callingReceiveMessage = (message: any) => {
    console.log('Received calling message:', message);
  };
  const callingStatusMessage = (message: any) => {
    console.log('Received Status message:', message);
    setHospitals((currHospitals) =>
      currHospitals.map((currHospital) =>
        currHospital.callingId === message.callingId ? { ...currHospital, status: message.status } : currHospital,
      ),
    );
  };
  const transferReceiveMessage = (message: any) => {
    console.log('Received transfer message:', message);
  };

  // 메시지 송신
  const callingSendMessage = () => {
    if (callingSocket.current) {
      callingSocket.current.publish({
        destination: `/app/${hospitalId}`,
        body: JSON.stringify({ name: '구급대원 요청 소켓 송신', longitude: 35.123, latitude: 127.123 }),
      });
    }
  };
  const transferSendMessage = (data: HospitalTransferParaItem) => {
    if (transferSocket.current) {
      transferSocket.current.publish({
        destination: `/app/location/${hospitalId}`,
        body: JSON.stringify(data),
      });
    }
  };

  let data: HospitalTransferParaItem;
  useEffect(() => {
    if (!transferring) return;
    data = {
      id: fixedCalling && fixedCalling.transferId,
      state: 'transfer', // transfer, complete, cancel, wait
      curLat: position.lat || 36.4469365928189,
      curLon: position.lon || 127.43940812262,
      curAddr: '김준섭 자택',
      leftTime: 10,
      leftDist: 10,
    };
    const interval = setInterval(() => transferSendMessage(data), 2000);
    return (() => {
      clearInterval(interval)
    })
  }, [transferring]);

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

  return <>
    <div onClick={callingSendMessage}>callingSendMessage</div>
  </>;
}

export default ParamedicSocket;
