import { useState, useEffect } from 'react';

import * as S from './Call.style';
import M from '/src/components/Commons/Molecules';
import { 
  Ktas, 
  Information, 
  Status, 
  Category, 
  RecordModal } from '/src/components/Paramedic/Call';

import { useReactMediaRecorder } from 'react-media-recorder';

// 리코일
import { 
  useRecoilValue,
  useSetRecoilState} from 'recoil';
import { 
  recordContentFile, 
  recordImageFile, 
  recordVideoFile, 
  recordVoiceFile } from '/src/recoils/ParamedicAtoms';
import CameraModal from '../../../components/Paramedic/Call/CameraModal/CameraModal';
import { postSTT, postVoiceUpload } from '/src/apis/paramedic';

function Call() {
  const [recording, setRecording] = useState<boolean>(false);
  const [cameraing, setCameraing] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const setRecordContent = useSetRecoilState(recordContentFile);
  const setRecordVoice = useSetRecoilState(recordVoiceFile);

  const recordVideo = useRecoilValue(recordVideoFile);
  const recordImage = useRecoilValue(recordImageFile);
  const recordVoice = useRecoilValue(recordVoiceFile);

  // 녹음 라이브러리
  const {
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });
  
  // 녹음 시작
  const RecordStart = () => {
    setRecording(true);
    startRecording()
  };
  
  // 녹음 종료
  const RecordStop = async () => {
    setRecording(false);
    stopRecording()
  };
  
  // 카메라 모달 열기
  const CameraOpen = async () => {setCameraing(true)};

  // 카메라 모달 닫기
  const CameraClose = async () => {setCameraing(false)};

  // 녹음파일 업로드
  const axiosVoiceUpload = async (mediaBlobUrl: string | undefined):Promise<void> => {
    try {
      if (mediaBlobUrl) {
        const BlobUrl = await fetch(mediaBlobUrl);
        const blobData = await BlobUrl.blob();
        const data = new FormData();
        const dataForStt = new FormData();
        const blob = new Blob([blobData], { type: "audio/webm;codecs=opus" });
        data.append("files", blob, "tmp.webm");
        dataForStt.append("file", blob, "tmp.webm");
        axiosVoiceSTT(dataForStt)
        const response = await postVoiceUpload(data)
        setRecordVoice(response)
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  // 녹음 파일 STT 
  const axiosVoiceSTT = async (file: FormData): Promise<void> => {
    try {
      setRecordContent("음성을 텍스트로 반환하고 있습니다...")
      const response = await postSTT(file)
      setRecordContent(response.text)
    }
    catch(error) {
      console.log(error)
    }
  }

  // 녹음 파일
  useEffect (()=>{
    axiosVoiceUpload(mediaBlobUrl)
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
        <M.ParamedicHeader title={'환자 등록'}/>
        <S.Blank />
        <Ktas />
        <S.Blank />
        <Information />
        <S.Blank />
        <Status RecordStart={RecordStart} CameraOpen={CameraOpen} />

        {cameraing ? <CameraModal CameraClose={CameraClose} /> : <></>}
        {recording ? (
          <RecordModal 
            RecordStop={RecordStop} 
            time={formatTime(seconds)} /> ) : (<></>)}
        
        
        {/* 임시 태그 삭제할 예정 */}
        {recordVoice?.filePath && (
          <audio
            src={recordVoice.filePath}
            controls
            style={{
              width: '300px',
              height: '50px',
            }}
          ></audio>
        )}
        <img src={recordImage?.filePath}/>
        {
          recordVideo?.filePath ? (
            <video width="400" height="240" autoPlay controls>
              <source src={recordVideo.filePath} type="video/mp4" />
            </video>
          ) : null
        }

        <S.Blank />
        <Category />
        <S.Blank />
      </S.ContentBox>
    </S.Container>
  );
}

export default Call;
