import React from 'react';
import * as S from './CameraModal.style'
import { CallProps } from '/src/types/paramedic';
import { useSetRecoilState } from 'recoil';
import { recordCameraFile } from '/src/recoils/ParamedicAtoms';

function CameraModal({CameraClose} : CallProps) {
  const setRecordCamera = useSetRecoilState(recordCameraFile);

  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    CameraClose?.()
    const fileReader = new FileReader();
    const file = event.target.files && event.target.files[0];
    if (file) {fileReader.readAsDataURL(file);}
    fileReader.onloadend = () => {
      if (fileReader.result) {
        const base64Data = fileReader.result as string;
        const byteString = atob(base64Data.split(',')[1]);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const intArray = new Uint8Array(arrayBuffer);

        for (let i = 0; i < byteString.length; i++) {
          intArray[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([intArray], { type: 'image/jpeg' });
        const blobUrl = URL.createObjectURL(blob);
        console.log("recordCamera 리코일 값 : ",blobUrl)
        setRecordCamera(blobUrl);
      }
    };
  };

  const handleCameraClick = () => {
    setRecordCamera("")
    const fileInput = document.getElementById('fileInput');
    if(fileInput) {fileInput.click()}
  };
  
  const handleVideoClick = () => {
    setRecordCamera("")
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
