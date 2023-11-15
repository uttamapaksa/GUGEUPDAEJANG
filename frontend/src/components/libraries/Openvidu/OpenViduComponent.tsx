import React, { useState, useEffect } from "react";
import { OpenVidu } from "openvidu-browser";
import { deleteMeetConnect, postMeetConnect } from "/src/apis/openvidu";
import UserVideoComponent from "./UserVideoComponent";
import { Container, Main, Session, Sub } from "./UserVideoComponent.style";


const OpenViduComponent = (props: any) => {

  const [, setOV] = useState<OpenVidu>();
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

      console.log(subscriber);
      // if (props.type === "hospital"){
      //   setSubscribers((subscribers) => [...subscribers, subscriber]);
      // }
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

      if (token === undefined) return;
      console.log(token);
      await mySession.connect(token, { clientData: props.transferId });

      const devices = await newOV.getDevices();
      console.log("devices");
      console.log(devices);
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
      console.log(newPublisher);
      // console.log(publisher);
      console.log(subscribers);
      // }
    } catch (error: any) {
      console.log("There was an error connecting to the session:", error.code, error.message);
      leaveSession();
    }
  };

  const leaveSession = async () => {
    // --- 7) Leave the session by calling 'disconnect' method over the Session object ---
    if (session) {
      session.disconnect();
    }
    setOV(undefined);
    setSession(undefined);
    setSubscribers([]);
    // setMySessionId("SessionA");
    // setMyUserName("Participant" + Math.floor(Math.random() * 100));
    setPublisher(undefined);
    props.setModalOff();
    await deleteMeetConnect(props.transferId);
  };

  const deleteSubscriber = (streamManager: any) => {
    setSubscribers((prevSubscribers) => prevSubscribers.filter((sub) => sub !== streamManager));
    alert("연결종료")
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
                    <UserVideoComponent key={i} streamManager={sub}>
                      subscribers
                    </UserVideoComponent>
                  ))}
                  {subscribers.length == 0 ? <>nonsubscribe</> : <></>}
                  <Sub>
                    {publisher !== undefined ? (
                      <UserVideoComponent id="publisher" streamManager={publisher}>
                        publisher
                      </UserVideoComponent>
                    ) : (
                      <>nonpublisher</>
                    )}
                  </Sub>
                </Main>
              </>
              :
              <>
                <Main>
                  {publisher !== undefined ? (
                    <UserVideoComponent id="publisher" streamManager={publisher}>
                      publisher
                    </UserVideoComponent>
                  ) : (
                    <>nonpublisher</>
                  )}
                  <Sub>
                    {subscribers.map((sub, i) => (
                      <UserVideoComponent key={i} streamManager={sub}>
                        subscribers
                      </UserVideoComponent>
                    ))}
                    {subscribers.length == 0 ? <>nonsubscribe</> : <></>}
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
