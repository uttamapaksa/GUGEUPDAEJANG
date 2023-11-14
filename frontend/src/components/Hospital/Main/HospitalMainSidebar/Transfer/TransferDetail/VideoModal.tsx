import { useEffect, useState } from "react";
import { ModalContainer } from "./TransferDetail.style";
import { ImgExitGray } from "/src/components/Commons/Atoms/Image";
import OpenViduComponent from "/src/components/libraries/Openvidu/OpenViduComponent";
interface ModalProps {
  transferId: number,
  closeModal: () => void
}
const VideoModal = (props: ModalProps) => {

  const [videoOff, setVideoOff] = useState(false);
  const [modalOff, setModalOff] = useState(false);
  
  useEffect(()=>{
    if(modalOff) props.closeModal();
  },[modalOff])
// props.closeModal
  return (
    <ModalContainer>
      <ImgExitGray
        $position="absolute"
        $top="10px"
        $right="10px"
        $zIndex="12000"
        $width="15px"
        $height="15px"
        $cursor="pointer"
        onClick={()=>{setVideoOff(true)}}
      ></ImgExitGray>
      <OpenViduComponent 
      transferId={props.transferId} 
      type={"hospital"}
      videoOff={videoOff}
      setModalOff={()=>{setModalOff(true)}}
      ></OpenViduComponent>
    </ModalContainer>
  );
};

export default VideoModal;
