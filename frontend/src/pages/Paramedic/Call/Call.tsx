import { useState, useEffect } from 'react';
import * as S from './Call.style';
import M from '/src/components/Commons/Molecules';
import { Ktas, Information, Status, Category, RecordModal } from '/src/components/Paramedic/Call';
import SoundToText from '/src/components/libraries/STT/SoundToText';
// import { useReactMediaRecorder } from "react-media-recorder";

// 리코일
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { recordContentFile, recordVoiceFile, paramedicCallState } from '/src/recoils/ParamedicAtoms';

function Call() {
  const setCallState = useSetRecoilState(paramedicCallState);
  const recordContent = useRecoilValue(recordContentFile);
  const [recording, setRecording] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const setRecordContent = useSetRecoilState(recordContentFile);
  const [recordVoice, setRecordVoice] = useRecoilState(recordVoiceFile);
  // const setRecordVoice = useSetRecoilState(recordVoiceFile);

  const { startListening, stopListening, hasRecognitionSupport } = SoundToText(setRecordContent);

  // const {
  //   startRecording,
  //   stopRecording,
  //   mediaBlobUrl,
  // } = useReactMediaRecorder({ audio: true });

  const RecordStart = () => {
    setRecording(true);
    startListening();
    // startRecording()
  };

  const RecordStop = async () => {
    setRecording(false);
    stopListening();
    // stopRecording()
  };

  // useEffect (()=>{
  //   setRecordVoice(mediaBlobUrl ?? "")
  // },[mediaBlobUrl])

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
        {hasRecognitionSupport ? (
          <S.Div>
            {formatTime(seconds)}
            {recordContent}
          </S.Div>
        ) : (
          <></>
        )}

        {recording ? <RecordModal RecordStop={RecordStop} time={formatTime(seconds)} /> : <></>}
        <S.Blank />
        <Category />
        <S.Blank />
      </S.ContentBox>
    </S.Container>
  );
}

export default Call;
