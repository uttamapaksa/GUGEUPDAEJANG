import { useState, useEffect, useRef } from "react";
// import { HospitalSocketProps } from '../types/socket';
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  hospitalParmedicRequestList,
  hospitalParmedicTransferList,
} from "../recoils/HospitalAtoms";
import { hospitalInfoState } from "../recoils/AuthAtoms";
import {
  HospitalTransferItem,
  HospitalTransferParaItem,
  ParaRequestItem,
  ParamedicStatusProps,
} from "../types/map";

const CALLING_SERVER_URL = "https://k9b204a.p.ssafy.io:64419/calling-websocket";
const TRANSFER_SERVER_URL = "https://k9b204a.p.ssafy.io:64413/transfer-websocket";
// let hospitalId = 9999;
// const paramedicId = 1;

// function HospitalSocket({ hospitalId }: HospitalSocketProps) {
function HospitalSocket() {
  const setHospitalInfo = useRecoilValue(hospitalInfoState);
  let hospitalId = setHospitalInfo.hospitalId;

  const [requestList, setRequestList] = useRecoilState(hospitalParmedicRequestList);
  const [transferList, setTransferList] = useRecoilState(hospitalParmedicTransferList);
  console.log(requestList);



  const callingSocket = useRef<Client | null>(null);
  const transferSocket = useRef<Client | null>(null);
  const statusSocket = useRef<Client | null>(null);

  // 연결 함수
  const connectSocket = () => {
    // 요청 소켓 callingSocket
    const sockJS1 = new SockJS(CALLING_SERVER_URL);
    const stompClient1 = new Client({
      webSocketFactory: () => sockJS1,
      reconnectDelay: 5 * 1000, // 재연결 딜레이 (5초)
    });

    stompClient1.onConnect = () => {
      console.log("Connected to the Calling socket server.");
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
      console.log("Connected to the Transfer socket server.");
      subscribeTransferTopic();
    };

    stompClient2.activate();
    transferSocket.current = stompClient2; // useRef로 생성한 clientRef에 클라이언트 객체 할당

    // 상태 소켓 statusSocket
    const sockJS3 = new SockJS(CALLING_SERVER_URL);
    const stompClient3 = new Client({
      webSocketFactory: () => sockJS3,
      reconnectDelay: 5 * 1000, // 재연결 딜레이 (5초)
    });

    stompClient3.onConnect = () => {
      console.log("Connected to the Calling socket server.");
      subscribeStatusTopic();
    };

    stompClient3.activate();
    statusSocket.current = stompClient3; // useRef로 생성한 clientRef에 클라이언트 객체 할당
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

  const subscribeStatusTopic = () => {
    if (statusSocket.current) {
      statusSocket.current.subscribe(`/topic/status/${hospitalId}`, (message) => {
        statusReceiveMessage(message.body);
      });
    }
  };

  // 구급대원 요청 수신
  const callingReceiveMessage = (message: any) => {
    console.log("Received calling message:", message);
    const item: ParaRequestItem = JSON.parse(message);
    console.log("-------------callingReceiveMessage----------");
    console.log(item);
    console.log(requestList);
    let nextList = [];
    if (requestList !== undefined) {
      let flag = true;
      for (let i = 0; i < requestList.length; i++) {
        if (requestList[i].id === item.id) {
          nextList.push(item);
          flag = false;
        } else {
          nextList.push(requestList[i]);
        }
      }
      if (flag) nextList.push(item);
    } else {
      nextList.push(item);
    }
    console.log(nextList);
    setRequestList(nextList);
  };

  // 구급대원 요청 상태 수신
  const statusReceiveMessage = (message: any) => {
    console.log("Received status message:", message);
    const item: ParamedicStatusProps = JSON.parse(message);
    console.log("-------------statusReceiveMessage----------");
    console.log(item);
    console.log(requestList);
    if (item.status === "TERMINATED" || item.status === "CANCELED") {
      if (requestList !== undefined) {
        let nextRequestList = requestList.filter(
          (tmp: ParaRequestItem) => tmp.id != item.callingId
        );
        setRequestList(nextRequestList);
      }
    }
  };

  // 이송소켓 수신
  // 구급대원으로부터 현재 위치 수신
  const transferReceiveMessage = (message: any) => {
    console.log("Received transfer message:", message);
    const item: HospitalTransferParaItem = JSON.parse(message);
    console.log("@@@-transfer-Receive-----------transferReceiveMessage----------");
    console.log(transferList);

    let nextList = [];
    if (transferList !== undefined) {
      for (let i = 0; i < transferList.length; i++) {
        if (transferList[i].id === item.id) {
          const curItme: HospitalTransferItem = {
            id: transferList[i].id,
            state: item.state,
            transferId: item.transferId,
            curLat: item.curLat,
            curLon: item.curLon,
            curAddr: item.curAddr,
            data: transferList[i].data,
            videoOn: item.videoOn,
          };
          console.log(curItme);
          nextList.push(curItme);
        } else {
          nextList.push(transferList[i]);
        }
      }
      setTransferList(nextList);
    }
    console.log(nextList);
  };

  useEffect(() => {
    console.log("transferList in socket", transferList);
  }, [transferList]);

  useEffect(() => {
    connectSocket();

    return () => {
      if (callingSocket.current) {
        callingSocket.current.deactivate();
      }
      if (transferSocket.current) {
        transferSocket.current.deactivate();
      }
      if (statusSocket.current) {
        statusSocket.current.deactivate();
      }
    };
  }, [hospitalId]);

  return <></>;
}

export default HospitalSocket;
