import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { OpenVidu } from "openvidu-browser";
import styled from 'styled-components';
import { postMeetConnect } from '/src/apis/openvidu';
import UserVideoComponent from './UserVideoComponent';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid red;
  height: 400px;
`
const OpenViduComponent = (props: any) => {
  // const OPENVIDU_SERVER_URL = `https://${window.location.hostname}:4443`;
  // const OPENVIDU_SERVER_SECRET = 'MY_SECRET';

  const currentUser = props.transferId; //현재 사용자 정보

  const [mySessionId, setMySessionId] = useState('SessionA');
  const [myUserName, setMyUserName] = useState(`OpenVidu_User_${Math.floor(Math.random() * 100)}`);
  const [session, setSession] = useState<any>(undefined);

  const [publisher, setPublisher] = useState<any>(undefined);
  const [subscribers, setSubscribers] = useState<any[]>([]);


  const [connectionId, setConnectionId] = useState("");


  const joinSession = async () => {
    const OV = new OpenVidu();

    // --- 2) Init a session ---
    const mySession = OV.initSession();
    setSession(mySession);

    // --- 3) Specify the actions when events take place in the session ---
    mySession.on("streamCreated", async (event) => {
      // event.stream.streamId = currentUser.email;
      const subscriber = mySession.subscribe(event.stream, "");

      console.log(subscriber);

      await setSubscribers((subscribers) => [...subscribers, subscriber]);
      setConnectionId(event.stream.connection.connectionId);

      console.log(subscriber);
    });

    mySession.on("streamDestroyed", (event) => {
      deleteSubscriber(event.stream.streamManager);
    });

    // --- 4) Connect to the session with a valid user token ---
    try {
      const token = await getToken();

      await mySession.connect(token.data.token, { clientData: currentUser });

      const devices = await OV.getDevices();
      console.log("devices");
      console.log(devices);
      const videoDevices = devices.filter((device) => device.kind === "videoinput");

      // --- 5) Get your own camera stream ---
      const newPublisher = OV.initPublisher("", {
        videoSource: videoDevices[1]?.deviceId,
        frameRate: 30,
        mirror: false,
        // insertMode: 'APPEND',
      });

      newPublisher.id = currentUser;
      await mySession.publish(newPublisher);
      setPublisher(newPublisher);
      console.log(newPublisher);
      // console.log(publisher);
      console.log(subscribers);
    } catch (error: any) {
      console.log("There was an error connecting to the session:", error.code, error.message);
      leaveSession();
    }
  };

  const leaveSession = () => {
    // --- 7) Leave the session by calling 'disconnect' method over the Session object ---
    if (session) {
      session.disconnect();
    }

    // Empty all properties...
    setSession(undefined);
    setSubscribers([]);
    setMySessionId("SessionA");
    setMyUserName("Participant" + Math.floor(Math.random() * 100));
    setPublisher(undefined);
  };

  const deleteSubscriber = (streamManager: any) => {
    setSubscribers((prevSubscribers) => prevSubscribers.filter((sub) => sub !== streamManager));
  };

  const getToken = async () => {
    const response = await postMeetConnect(props.transferId);
    // if (response !== undefined) return response.data.token;
    // else return undefined;
    return response;
  };

  useEffect(() => {
    joinSession();
  }, []);

  return (
    <Container>
      {session !== undefined ? (
        <div id="session">
          <div>
            {publisher !== undefined ? (
              <UserVideoComponent streamManager={publisher} />
            ) : null}
            {/* <UserVideoComponent
              streamManager={subscribers}
            /> */}
          </div>
        </div>
      ) : (
        <button onClick={joinSession}></button>
      )}
    </Container>
  );
};

export default OpenViduComponent;
