import React, {useEffect} from 'react';
import * as S from './CameraModal.style'
import { CallProps } from '/src/types/paramedic';
import { useRecoilState } from 'recoil';
import { recordCameraFile } from '/src/recoils/ParamedicAtoms';

function CameraModal({CameraClose} : CallProps) {
  const [recordCamera, setRecordCamera] = useRecoilState(recordCameraFile);

  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const file = event.target.files && event.target.files[0];
    if(file)fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      if (fileReader.result) {
        const base64Data = fileReader.result;
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

  useEffect (()=>{
    if(recordCamera) { CameraClose?.() }
  },[recordCamera])

  return (
    <S.Overlay>
      <S.Container>
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
          id="videoInput"
          type="file"
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
