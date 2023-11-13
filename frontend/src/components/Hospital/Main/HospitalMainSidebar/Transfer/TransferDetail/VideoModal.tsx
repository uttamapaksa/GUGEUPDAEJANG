import { ModalContainer } from "./TransferDetail.style";
import { ImgExitGray } from "/src/components/Commons/Atoms/Image";
import OpenViduComponent from "/src/components/libraries/Openvidu/OpenViduComponent";

const VideoModal = (props: { transferId: number }) => {
  return (
    <ModalContainer>
      <ImgExitGray $position="absolute" $top="10px" $right="10px" $zIndex="12000"></ImgExitGray>
      <OpenViduComponent transferId={props.transferId} type={"hospital"}></OpenViduComponent>
    </ModalContainer>
  );
};

export default VideoModal;
