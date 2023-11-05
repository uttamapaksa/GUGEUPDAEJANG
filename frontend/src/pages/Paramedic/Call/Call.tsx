import { useState, useEffect } from 'react';
import * as S from './Call.style';
import M from '/src/components/Commons/Molecules';
import { Ktas, Information, Status, Category, RecordModal } from '/src/components/Paramedic/Call';
// import SoundToText from '/src/components/libraries/STT/SoundToText';
import { useReactMediaRecorder } from "react-media-recorder";

import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


// 리코일
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { recordContentFile, recordVoiceFile, paramedicCallState } from '/src/recoils/ParamedicAtoms';
// import AnnyangSTT from '/src/components/libraries/STT/AnnyangSTT';

function Call() {
  const setCallState = useSetRecoilState(paramedicCallState);
  const recordContent = useRecoilValue(recordContentFile);
  const [recording, setRecording] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const setRecordContent = useSetRecoilState(recordContentFile);
  const [recordVoice, setRecordVoice] = useRecoilState(recordVoiceFile);
  // const setRecordVoice = useSetRecoilState(recordVoiceFile);

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // const [Test, setTest] = useState<string>("시험용")

  // const { 
  //   startListening, 
  //   stopListening, 
  //   isListeningRef} = SoundToText(setRecordContent);
  
  // const { 
  //   texts, 
  //   listening, 
  //   startListenings, 
  //   stopListenings } = AnnyangSTT();
  
  // useEffect(() => {
  //   setTest(Test + texts)
  // },[texts])
  
  const {
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });

  const RecordStart = () => {
    setRecording(true);
    SpeechRecognition.startListening({ continuous: true })
    // startListenings()
    // startListening();
    startRecording()
  };

  const RecordStop = async () => {
    setRecording(false);
    SpeechRecognition.stopListening()
    // stopListenings()
    // stopListening();
    stopRecording()
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
    if (recording) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    handleRecordingTimer();
    return clearTimer;
  }, [recording]);

  return (
    <S.Container>
      <S.ContentBox>
        <M.ParamedicHeader />
        <S.Blank />
        <Ktas setCallState={setCallState} />
        <S.Blank />
        <Information setCallState={setCallState} />
        <S.Blank />
        <Status RecordStart={RecordStart} />

        {/* 임시 태그 삭제할 예정 */}
        <audio
          src={recordVoice}
          controls
          style={{
            width: '300px',
            height: '50px',
          }}
        ></audio>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <p>Test: {transcript}</p>

        {recording ? <RecordModal RecordStop={RecordStop} time={formatTime(seconds)} /> : <></>}
        <S.Blank />
        <Category />
        <S.Blank />
      </S.ContentBox>
    </S.Container>
  );
}

export default Call;
