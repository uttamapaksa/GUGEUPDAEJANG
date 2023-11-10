import React, { useEffect, useRef } from "react";
import {  Video } from "./UserVideoComponent.style";

const OpenViduVideoComponent = (props: any) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (props && !!videoRef.current) {
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props]);

  return <Video autoPlay={true} ref={videoRef}/>
};

export default OpenViduVideoComponent;
