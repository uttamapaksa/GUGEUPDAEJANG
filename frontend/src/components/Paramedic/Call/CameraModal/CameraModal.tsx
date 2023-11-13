import React from 'react';
import * as S from './CameraModal.style'

// 리코일
import { useSetRecoilState } from 'recoil';
import { 
  recordContentFile,
  recordImageFile, 
  recordVideoFile } from '/src/recoils/ParamedicAtoms';

// API
import { postCameraUpload, postSTT } from '/src/apis/paramedic';

// 타입
import { CallProps } from '/src/types/paramedic';

function CameraModal({CameraClose} : CallProps) {
  const setRecordContent = useSetRecoilState(recordContentFile);
  const setRecordVideo = useSetRecoilState(recordVideoFile);
  const setRecordImage = useSetRecoilState(recordImageFile);

  // 사진 or 동영상 촬영
  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    CameraClose?.()
    const file = event.target.files? Array.from(event.target.files):[]
    const type = file[0].type.split('/')[0]
    if (type === "image") { axiosImageUpload(file) }
    else if (type === "video") { axiosVideoUpload(file) }
  };

  // 사진파일 업로드 
  const axiosImageUpload = async (file:File[]):Promise<void> => {
    try {
      const response = await postCameraUpload(file)
      setRecordImage(response)
    }
    catch(error) {
      console.log(error)
    }
  }

  // 동영상파일 업로드
  const axiosVideoUpload = async (file:File[]):Promise<void> => {
    try {
      const response = await postCameraUpload(file)
      setRecordVideo(response)
      axiosVideoSTT(file)
    }
    catch(error) {
      console.log(error)
    }
  }

  // 동영상 파일 STT
  const axiosVideoSTT = async (file:File[]): Promise<void> => {
    try {
      const data = new FormData();
      data.append('file', file[0]);
      setRecordContent("음성을 텍스트로 반환하고 있습니다...")
      const response = await postSTT(data)
      setRecordContent(response.text)
    }
    catch(error) {
      console.log(error)
    }
  }

  // 사진 카메라 버튼
  const handleCameraClick = () => {
    setRecordImage(undefined)
    const fileInput = document.getElementById('fileInput');
    if(fileInput) {fileInput.click()}
  };
  
  // 동영상 카메라 버튼
  const handleVideoClick = () => {
    setRecordVideo(undefined)
    const videoInput = document.getElementById('videoInput');
    if(videoInput) {videoInput.click()}
  };

  const CameraCloseProtect = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 이 부분이 중요합니다.
  };

  return (
    <S.Overlay
      onClick={CameraClose}>
      <S.Container
        onClick={CameraCloseProtect}>
        <S.Title>촬영</S.Title>
        <S.IptCamera
          type="file"
          id="fileInput"
          accept="image/*"
          capture="environment"
          onChange={handleCapture}/>
        <S.BtnCamera 
          onClick={handleCameraClick}>사진 촬영</S.BtnCamera>

        <S.IptVideo
          type="file"
          id="videoInput"
          accept="video/*"
          capture="environment"
          onChange={handleCapture}/>
        <S.BtnVideo 
          onClick={handleVideoClick}>동영상 촬영</S.BtnVideo>
      </S.Container>
    </S.Overlay>
  );
}

export default CameraModal;
