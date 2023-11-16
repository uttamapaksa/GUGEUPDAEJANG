import React, { useState, useEffect } from "react";
import { OpenVidu } from "openvidu-browser";
import { deleteMeetConnect, postMeetConnect } from "/src/apis/openvidu";
import UserVideoComponent from "./UserVideoComponent";
import { Container, Main, Session, Sub } from "./UserVideoComponent.style";
import Swal from "sweetalert2";

const OpenViduComponent = (props: any) => {

  const [ov, setOV] = useState<OpenVidu>();
  // const [, setMySessionId] = useState("SessionA");
  // const [, setMyUserName] = useState(`OpenVidu_User_${Math.floor(Math.random() * 100)}`);
  const [session, setSession] = useState<any>(undefined);

  const [publisher, setPublisher] = useState<any>(undefined);
  const [subscribers, setSubscribers] = useState<any[]>([]);

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

      // if (props.type === "hospital"){
      //   setSubscribers((subscribers) => [...subscribers, subscriber]);
      // }
      setSubscribers((subscribers) => [...subscribers, subscriber]);
    });

    mySession.on("streamDestroyed", (event) => {
      event.preventDefault();
      leaveSession();
      console.log("streamDestroyed")
    });

    mySession.on("exception", (exception) => {
      console.warn(exception);
    });

    mySession.on("signal:userOut", (event:any) => {
      console.log(event);
      if(event.msg==="out"){
        leaveSession();
      }
    });
  
    // --- 4) Connect to the session with a valid user token ---
    try {
      const token = await getToken();

      if (token === undefined) return;
      console.log(token);
      await mySession.connect(token, { clientData: props.transferId });

      const devices = await newOV.getDevices();
      const videoDevices = devices.filter((device) => device.kind === "videoinput");

      // if (props.type === "paramedic") {
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
      // }
    } catch (error: any) {
      console.log("There was an error connecting to the session:", error.code, error.message);
      leaveSession();
    }
  };
  
  const sendSignalUserOut = async () => {
    const signalOptions = {
      msg: "out",
      type: "userOut",
    };
    console.log("signalOptions", signalOptions)
    if(session) session.signal(signalOptions);
  };

  const leaveSession = async () => {
    // --- 7) Leave the session by calling 'disconnect' method over the Session object ---
    await sendSignalUserOut();
    
    if (session) {
      session.disconnect();
      await deleteMeetConnect(props.transferId);
    }
    setOV(undefined);
    setSession(undefined);
    setSubscribers([]);
    // setMySessionId("SessionA");
    // setMyUserName("Participant" + Math.floor(Math.random() * 100));
    setPublisher(undefined);
    
    props.setModalOff();
    Swal.fire(
      "연결종료",
      "",
      "success"
      // '확인',
    );
  };

  const getToken = async () => {
    const response = await postMeetConnect(props.transferId);
    // if (response !== undefined) return response.data.token;
    // else return undefined;
    return response;
  };

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ""; //Chrome에서 동작하도록; deprecated
  };

  useEffect(() => {
    joinSession();
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();
    return () => {
      window.removeEventListener("beforeunload", preventClose);
      leaveSession();
    };
  }, []);

  useEffect(() => {
    if (props.videoOff) {
      leaveSession();
      // props.setModalOff();
    }
  }, [props]);

  return (
    <Container>
      {session !== undefined ? (
        <Session id="session">
          {
            props.type === "hospital" ?
              <>
                <Main>
                  {subscribers.map((sub, i) => (
                    <UserVideoComponent key={i} streamManager={sub}></UserVideoComponent>
                  ))}
                  {subscribers.length == 0 ? <>응답대기중</> : <></>}
                  <Sub>
                    {publisher !== undefined ? (
                      <UserVideoComponent id="publisher" streamManager={publisher}></UserVideoComponent>
                    ) : (
                      <></>
                    )}
                  </Sub>
                </Main>
              </>
              :
              <>
                <Main>
                  {publisher !== undefined ? (
                    <UserVideoComponent id="publisher" streamManager={publisher}></UserVideoComponent>
                  ) : (
                    <></>
                  )}
                  <Sub>
                    {subscribers.map((sub, i) => (
                      <UserVideoComponent key={i} streamManager={sub}></UserVideoComponent>
                    ))}
                    {subscribers.length == 0 ? <>응답대기중</> : <></>}
                  </Sub>
                </Main>
              </>
          }
          <button onClick={leaveSession}></button>
        </Session>
      ) : (
        <button onClick={joinSession}></button>
      )}
    </Container>
  );
};

export default OpenViduComponent;
