import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; /* 원하는 여백 설정 */
  .
`

function TestCamera() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const chunksRef = useRef<Blob[]>([]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('카메라를 시작하는 중 오류 발생:', error);
    }
  };

  const startRecording = () => {
    if (stream) {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const recordedBlob = new Blob(chunksRef.current, { type: 'video/webm' });
        // recordedBlob을 동영상으로 표시하거나 업로드합니다.
        const videoUrl = URL.createObjectURL(recordedBlob);
        const videoElement = document.createElement('video');
        videoElement.src = videoUrl;
        videoElement.controls = true;
        document.body.appendChild(videoElement);
        console.log("동영상",videoUrl)
      };

      mediaRecorder.start();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && stream) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');

      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            // blob을 이미지로 표시하거나 업로드합니다.
            const imageUrl = URL.createObjectURL(blob);
            const img = new Image();
            img.src = imageUrl;
            document.body.appendChild(img);
            console.log("사진",imageUrl)
          }
        }, 'image/jpeg');
      }
    }
  };

  return (
    <Container>
      <h1>카메라 React 앱</h1>
      <div>
        <button 
          onClick={startCamera}>카메라 시작</button>
        <button 
          onClick={recording ? stopRecording : startRecording}>
            {recording ? '녹화 중지' : '녹화 시작'}</button>
        <button 
          onClick={takePhoto}>사진 촬영</button>
      </div>
      <video 
        ref={videoRef} autoPlay playsInline />
    </Container>
  );
}

export default TestCamera;
