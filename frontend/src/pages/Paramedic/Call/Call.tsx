import { useState, useEffect } from 'react';
import * as S from './Call.style';
import M from '/src/components/Commons/Molecules';
import { 
  Ktas, 
  Information, 
  Status, 
  Category, 
  RecordModal } from '/src/components/Paramedic/Call';

import "regenerator-runtime/runtime";
import { useReactMediaRecorder } from "react-media-recorder";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// import SoundToText from '/src/components/libraries/STT/SoundToText';
// import AnnyangSTT from '/src/components/libraries/STT/AnnyangSTT';

// 리코일
import { 
  useRecoilState, 
  useSetRecoilState } from 'recoil';
import { 
  recordContentFile, 
  recordVoiceFile, 
  paramedicCallState } from '/src/recoils/ParamedicAtoms';
import CameraModal from '../../../components/Paramedic/Call/CameraModal/CameraModal';

function Call() {
  const setCallState = useSetRecoilState(paramedicCallState);
  const [recording, setRecording] = useState<boolean>(false);
  const [cameraing, setCameraing] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const setRecordContent = useSetRecoilState(recordContentFile);
  const [recordVoice, setRecordVoice] = useRecoilState(recordVoiceFile);
  // const [recordCamera, setRecordCamera] = useRecoilState(recordCameraFile);

  const {
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });
  
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    setRecordContent(transcript)
  },[transcript])

  const RecordStart = () => {
    setRecording(true);
    resetTranscript()
    SpeechRecognition.startListening({ continuous: true })
    // startRecording()
  };

  const RecordStop = async () => {
    setRecording(false);
    SpeechRecognition.stopListening()
    // stopRecording()
  };

  const CameraOpen = async () => {
    setCameraing(true)
  };
  const CameraClose = async () => {
    setCameraing(false)
  };

  useEffect (()=>{
    setRecordVoice(mediaBlobUrl ?? "")
  },[mediaBlobUrl])

  const handleRecordingTimer = () => {
    if (recording) {
      setTimer(
        setInterval(() => {
          setSeconds((prev) => prev + 1);
        }, 1000),
      );
    } else {
      if (timer) {
        clearInterval(timer);
        setSeconds(0);
      }
    }
  };
  const clearTimer = () => {
    if (timer) clearInterval(timer);
  };

  const formatTime = (sec: number): string => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${String(minutes).padStart(2, '0')} 
    : ${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    if (recording || cameraing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    handleRecordingTimer();
    return clearTimer;
  }, [recording, cameraing]);

  return (
    <S.Container>
      <S.ContentBox>
        <M.ParamedicHeader />
        <S.Blank />
        <Ktas setCallState={setCallState} />
        <S.Blank />
        <Information setCallState={setCallState} />
        <S.Blank />
        <Status 
          RecordStart={RecordStart}
          CameraOpen={CameraOpen} />

        {cameraing ? (
          <CameraModal
            CameraClose={CameraClose}/> ) : (<></>)}
        {/* {recording ? (
          <RecordModal 
            RecordStop={RecordStop} 
            time={formatTime(seconds)} /> ) : (<></>)} */}

        {/* 임시 태그 삭제할 예정 */}
        <audio
          src={recordVoice}
          controls
          style={{
            width: '300px',
            height: '50px',
          }}></audio>
        <div>
          <button onClick={startRecording}>임시녹음시작</button>
          <button onClick={stopRecording}>임시녹음종료</button>
        </div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>

        <S.Blank />
        <Category />
        <S.Blank />
      </S.ContentBox>
    </S.Container>
  );
}

export default Call;
