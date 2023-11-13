import React, { useEffect, useRef } from "react";
import {  Video } from "./UserVideoComponent.style";

const OpenViduVideoComponent = (props: any) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (props && !!videoRef.current) {
      props.streamManager.addVideoElement(videoRef.current);
      console.log('StreamManager Stream:', props.streamManager.stream);
    }
  }, [props, props.streamManager]);

  return <Video autoPlay={true} ref={videoRef} muted={false}/>
};

export default OpenViduVideoComponent;
