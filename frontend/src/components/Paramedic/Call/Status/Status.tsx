import { useState, useEffect } from 'react';
import * as S from './Status.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

import { 
  useRecoilState, 
  useRecoilValue } from 'recoil';
import { 
  recordContentFile, 
  recordImageFile, 
  recordVideoFile,  
  recordVoiceFile} from '/src/recoils/ParamedicAtoms';
import { CallProps } from '/src/types/paramedic';

function Status({ RecordStart, CameraOpen }: CallProps) {
  const [recordContent, setRecordContent] = useRecoilState(recordContentFile);
  const [recordVideo, setRecordVideo] = useRecoilState(recordVideoFile);
  const [recordImage, setRecordImage] = useRecoilState(recordImageFile);
  const [recordVoice, setRecordVoice] = useRecoilState(recordVoiceFile);
  const [files, setFiles] = useState({})

  const removeFile = (type: string) => {
    if (type === 'video') {
      setRecordVideo(undefined);
    } else if (type === 'image') {
      setRecordImage(undefined);
    } else if (type === 'voice') {
      setRecordVoice(undefined);
    }
  };

  useEffect(()=>{
    setFiles({
      video: recordVideo,
      image: recordImage,
      voice: recordVoice
    });
  },[recordVideo, recordImage, recordVoice])

  return (
    <S.Status>
      <A.TxtParamedicTitle>환자 상태</A.TxtParamedicTitle>
      <S.Col9>
        <A.BtnMediaRecord
          $padding="0 1.5vh"
          $width="48%"
          $height="6.6vh"
          $color={theme.color.pinkLight}
          $border={`0.3vh solid ${theme.color.pinkLight}`}
          $borderRadius="1.8vh"
          $boxShadow="0 0 1vh 0.4vh rgba(0, 0, 0, 0.10)"
          $fontSize="2.2vh"
          onClick={() => {
            CameraOpen?.();
          }}
        >
          <A.ImgRecordCameraPink $width="3.2vh" />
          카메라 촬영
          <A.ImgArrowPinkRight $width="1vh" />
        </A.BtnMediaRecord>

        <A.BtnMediaRecord
          $padding="0 1vh"
          $width="48%"
          $height="6.6vh"
          $color={theme.color.pinkLight}
          $border={`0.3vh solid ${theme.color.pinkLight}`}
          $borderRadius="1.8vh"
          $boxShadow="0 0 1vh 0.4vh rgba(0, 0, 0, 0.10)"
          $fontSize="2.2vh"
          onClick={() => {
            RecordStart?.();
          }}
        >
          <A.ImgRecordVoicePink $width="2.2vh" />
          음성 녹음
          <A.ImgArrowPinkRight $width="1vh" />
        </A.BtnMediaRecord>

        <S.TxtStatus
          value={recordContent}
          onChange={(e) => setRecordContent(e.target.value)}
          placeholder="환자의 상태를 상세히 입력해주세요."
        >
        </S.TxtStatus>
        
        <S.FileBox>
          {Object.entries(files).map(([type, file]) => {
            if (!file) return null;
            return (
              <A.BtnMediaRecord
                key={type}
                $padding="0 1vh"
                $margin='2vh 1vh 0 0'
                $width="17.1vh"
                $height="4.5vh"
                $color={theme.color.grayDarkest}
                $border={`0.3vh solid ${theme.color.grayDarkest}`}
                $borderRadius="1.2vh"
                $fontSize="1.8vh"
              >
                {type === 'video' ? (
                  <> <A.ImgRecordVideoBlack $width="2vh" /> 영상.mp4</>
                ) : (<></>)}
                {type === 'image' ? (
                  <> <A.ImgRecordCameraBlack $width="1.8vh" /> 사진.jpg</>
                ) : (<></>)}
                {type === 'voice' ? (
                  <> <A.ImgRecordVoiceBlack $width="1.6vh" /> 녹음.mp3</>
                ) : (<></>)}

                <A.ImgExitBlack 
                  $width="1.4vh"
                  $margin='0 0 0 1vh'
                  onClick={() => removeFile(type)}
                />
              </A.BtnMediaRecord>
            );
          })}
        </S.FileBox>
      </S.Col9>
    </S.Status>
  );
}

export default Status;
