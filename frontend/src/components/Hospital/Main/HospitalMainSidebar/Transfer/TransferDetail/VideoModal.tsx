import { useEffect, useState } from "react";
import { ModalContent } from "./TransferDetail.style";
import A from "/src/components/Commons/Atoms";
import OpenViduComponent from "/src/components/libraries/Openvidu/OpenViduComponent";
interface ModalProps {
  position: string,
  top: string,
  right: string,
  width: string,
  height: string,
  transferId: number,
  closeModal: () => void
}
const VideoModal = (props: ModalProps) => {

  const [videoOff, setVideoOff] = useState(false);
  const [modalOff, setModalOff] = useState(false);

  useEffect(() => {
    if (modalOff) props.closeModal();
  }, [modalOff])
  // props.closeModal
  return (
    <ModalContent
      $position={props.position}
      $top={props.top}
      $right={props.right}
      $width={props.width}
      $height={props.height}>
      <A.ImgPhoneCallEnd
        $position="absolute"
        $bottom="10%"
        $right="50%"
        $transform="translate(50%, 0)"
        $zIndex="12000"
        $width="50px"
        $height="50px"
        $cursor="pointer"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => { e.stopPropagation(); setVideoOff(true); }}
      ></A.ImgPhoneCallEnd>
      <OpenViduComponent
        transferId={props.transferId}
        type={"hospital"}
        videoOff={videoOff}
        setModalOff={() => { setModalOff(true) }}
      ></OpenViduComponent>
    </ModalContent>
  );
};

export default VideoModal;
