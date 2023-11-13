import React, { useState, useEffect } from "react";
import axios from "axios";
import { OpenVidu } from "openvidu-browser";
import styled from "styled-components";
import { postMeetConnect } from "/src/apis/openvidu";
import UserVideoComponent from "./UserVideoComponent";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid red;
  height: 400px;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  overflow-y: auto;
  overflow-x: none;
`;
const OpenViduComponent = (props: any) => {
  // const OPENVIDU_SERVER_URL = `https://${window.location.hostname}:4443`;
  // const OPENVIDU_SERVER_SECRET = 'MY_SECRET';

  const [OV, setOV] = useState<OpenVidu>();
  const [mySessionId, setMySessionId] = useState("SessionA");
  const [myUserName, setMyUserName] = useState(`OpenVidu_User_${Math.floor(Math.random() * 100)}`);
  const [session, setSession] = useState<any>(undefined);

  const [publisher, setPublisher] = useState<any>(undefined);
  const [subscribers, setSubscribers] = useState<any[]>([]);

  const [connectionId, setConnectionId] = useState("");

  const joinSession = async () => {
    const newOV = new OpenVidu();
    // --- 2) Init a session ---
    newOV.enableProdMode();
    const mySession = newOV.initSession();
    setOV(newOV);
    setSession(mySession);

    // --- 3) Specify the actions when events take place in the session ---
    mySession.on("streamCreated", async (event) => {
      // event.stream.streamId = currentUser.email;
      const subscriber = mySession.subscribe(event.stream, "");

      console.log(subscriber);

      setSubscribers((subscribers) => [...subscribers, subscriber]);
    });

    mySession.on("streamDestroyed", (event) => {
      event.preventDefault();
      deleteSubscriber(event.stream.streamManager);
    });

    mySession.on("exception", (exception) => {
      console.warn(exception);
    });
    // --- 4) Connect to the session with a valid user token ---
    try {
      const token = await getToken();

      console.log(token);
      await mySession.connect(token, { clientData: props.transferId });

      const devices = await newOV.getDevices();
      console.log("devices");
      console.log(devices);
      const videoDevices = devices.filter((device) => device.kind === "videoinput");

      // --- 5) Get your own camera stream ---
      const newPublisher = newOV.initPublisher("", {
        videoSource: videoDevices[1]?.deviceId,
        frameRate: 30,
        publishAudio: true,
        publishVideo: true,
        mirror: false,
        // insertMode: 'APPEND',
      });

      // newPublisher.id = props.transferId;
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
    setOV(undefined);
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
    console.log(
      "openviduopenviduopenviduopenviduopenviduopenviduopenviduopenviduopenviduopenviduopenvidu"
    );
  }, []);

  return (
    <Container>
      {session !== undefined ? (
        <div id="session">
          <List>
            <>
              {publisher !== undefined ? (
                <UserVideoComponent id="publisher" streamManager={publisher}>
                  publisher
                </UserVideoComponent>
              ) : (
                <>nonpublisher</>
              )}
            </>
            <>
              {subscribers.map((sub, i) => (
                <UserVideoComponent key={i} streamManager={sub}>
                  subscribers
                </UserVideoComponent>
              ))}
            </>
          </List>
          <button onClick={leaveSession}></button>
        </div>
      ) : (
        <button onClick={joinSession}></button>
      )}
    </Container>
  );
};

export default OpenViduComponent;
