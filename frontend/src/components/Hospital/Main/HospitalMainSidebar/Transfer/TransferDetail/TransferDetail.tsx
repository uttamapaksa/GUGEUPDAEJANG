import { useRecoilState } from "recoil";
import { ItemParaType, ItemRequestAt } from "../TransferListItem/TransferListItem.style";
import {
  CloseDiv,
  DetailItemContainer,
  ItemElapseMin,
  ItemAddr,
  TransferDetailContainer,
  TransferDetailContent,
  DetailItemBetween,
  ItemLeftTime,
  FilesSection,
  Video,
  NoFile,
  Image,
  Audio,
} from "./TransferDetail.style";
import A from "/src/components/Commons/Atoms";
import theme from "/src/styles";
import {
  hospitalParmedicTransferList,
  hospitalSelectedTransferItem,
} from "/src/recoils/HospitalAtoms";
import { HospitalTransferItem } from "/src/types/map";
import { expectedTime, timeToString, turmToString } from "/src/constants/function";
import { AGEGROUP, GENDER } from "/src/constants/variable";
import { useEffect, useState } from "react";
import VideoModal from "./VideoModal";
import { FileTypes } from "../../Request/ParamedicDetail/ParamedicDetail";

const TransferDetail = (props: any) => {
  const [transferList, setTransferList] = useRecoilState(hospitalParmedicTransferList);
  const [selectedParaItem, setSelectedParaItem] = useRecoilState(hospitalSelectedTransferItem);

  const [videoOpen, setVideoOpen] = useState(false);

  const [objFiles, setObjFiles] = useState<FileTypes>({ video: null, image: null, voice: null });

  const checkFiles = (fileList: string[]) => {
    const filesObject: FileTypes = { video: null, image: null, voice: null };

    fileList.map((file) => {
      if (!file) return;
      const parts = file.split(".");
      const extension = parts.length > 1 ? parts.pop()?.toLowerCase() : "";
      if (!extension) return;
      if (extension === "mp4") {
        filesObject.video = file as string | null;
      } else if (extension === "jpg" || extension === "png") {
        filesObject.image = file as string | null;
      } else if (extension === "webm") {
        filesObject.voice = file as string | null;
      }
    });
    setObjFiles(filesObject);
  };

  useEffect(() => {
    if (selectedParaItem !== undefined && selectedParaItem.data.files) {
      checkFiles(selectedParaItem.data.files);
    }
    console.log(selectedParaItem);
  }, [selectedParaItem]);

  const closeModal = () => {
    setVideoOpen(false);
  };

  const clickButton = () => {
    if (transferList != undefined && selectedParaItem != undefined) {
      console.log("clickButton", transferList);
      let nextTransferList = transferList.filter(
        (item: HospitalTransferItem) => item.id != selectedParaItem.id
      );
      setTransferList(nextTransferList);
      props.onclick();
    }
    if (selectedParaItem !== undefined) {
      setSelectedParaItem(undefined);
    }
  };
  return selectedParaItem && (
    <TransferDetailContainer>
      <TransferDetailContent>
        <DetailItemContainer>
          <A.DivKtasInfo
            $position="absolute"
            $right="0%"
            $top="0%"
            $ktas={selectedParaItem.data.ktas.toLowerCase()}
            $width="50px"
            $height="25px"
            $borderRadius="0px 0px 0px 10px"
            $fontSize={theme.font.Small5_12}
          >
            {selectedParaItem.data.ktas}
          </A.DivKtasInfo>
          <ItemRequestAt>{timeToString(selectedParaItem.data.createdAt)}</ItemRequestAt>
          <DetailItemBetween>
            <ItemParaType>
              {AGEGROUP[selectedParaItem.data.ageGroup]} ({GENDER[selectedParaItem.data.gender]})
            </ItemParaType>
            <ItemElapseMin>요청 이후 {turmToString(selectedParaItem.data.createdAt)}분 경과</ItemElapseMin>
          </DetailItemBetween>

          <div style={{ width: "90%", margin: "0 auto" }}>
            {selectedParaItem.data.tags.map((item: string, index: number) => (
              <A.DivTag
                key={index}
                $margin="2px 5px 10px 2px"
                $width="fit-content"
                $height="18px"
                $borderRadius="5px"
                $textAlign="center"
                $padding="2px"
                $fontSize={theme.font.Small5_12}
              >
                {item}
              </A.DivTag>
            ))}
          </div>

          <FilesSection>
            {objFiles.video ? (
              <Video controls>
                <source src={objFiles.video} type="video/mp4" />
              </Video>
            ) : (
              <NoFile>
                영상이<br></br>없습니다.
              </NoFile>
            )}

            {objFiles.image ? (
              <Image src={objFiles.image}></Image>
            ) : (
              <NoFile>
                사진이<br></br>없습니다.
              </NoFile>
            )}

            {objFiles.voice ? (
              <Audio src={objFiles.voice} controls></Audio>
            ) : (
              <Audio controls></Audio>
            )}
          </FilesSection>

          <A.BtnMediaRecord
            $width="90%"
            $height="40PX"
            $color={theme.color.pinkLight}
            $border={`0.3vh solid ${theme.color.pinkLight}`}
            $borderRadius="1.8vh"
            $boxShadow="0 0 1vh 0.4vh rgba(0, 0, 0, 0.10)"
            $fontSize="2.2vh"
            $justifyContent="center"
            $margin="0 auto"
            onClick={() => setVideoOpen(true)}
          >
            <A.ImgRecordCameraPink $width="3.2vh" $margin="10px" />
            화상 통화 보기
          </A.BtnMediaRecord>

          <ItemAddr>{selectedParaItem.data.description}</ItemAddr>
          <ItemAddr>{selectedParaItem.data.address}</ItemAddr>
          <DetailItemBetween>
            <ItemLeftTime>
              도착 예정 시간 : {expectedTime(selectedParaItem.data.createdAt, selectedParaItem.data.duration)}
            </ItemLeftTime>
          </DetailItemBetween>

          {selectedParaItem.state == "transfer" ? (
            <A.DivTag
              $width="100%"
              $height="50px"
              $position="absolute"
              $left="0%"
              $bottom="0%"
              $color={theme.color.white}
              $borderRadius="0px"
              $fontSize={theme.font.Small1_16}
              $backgroundColor={theme.color.blue}
              $boxShadow=""
            >
              이송중
            </A.DivTag>
          ) : (
            <></>
          )}
          {selectedParaItem.state == "wait" ? (
            <A.DivTag
              $width="100%"
              $height="50px"
              $position="absolute"
              $left="0%"
              $bottom="0%"
              $color={theme.color.black}
              $borderRadius="0px"
              $fontSize={theme.font.Small1_16}
              $backgroundColor={theme.color.ktas3_Active}
              $boxShadow="0"
            >
              대기중
            </A.DivTag>
          ) : (
            <></>
          )}
          {selectedParaItem.state == "complete" ? (
            <A.DivTag
              $width="100%"
              $height="50px"
              $position="absolute"
              $left="0%"
              $bottom="0%"
              $color={theme.color.white}
              $borderRadius="0px"
              $fontSize={theme.font.Small1_16}
              $backgroundColor={theme.color.ktas4_Active}
              $boxShadow="0"
              onClick={clickButton}
            >
              완료됨(눌러서 제거)
            </A.DivTag>
          ) : (
            <></>
          )}
          {selectedParaItem.state == "cancel" ? (
            <A.DivTag
              $width="100%"
              $height="50px"
              $position="absolute"
              $left="0%"
              $bottom="0%"
              $color={theme.color.white}
              $borderRadius="0px"
              $fontSize={theme.font.Small1_16}
              $backgroundColor={theme.color.ktas2_Active}
              $boxShadow="0"
              onClick={clickButton}
            >
              취소됨(눌러서 제거)
            </A.DivTag>
          ) : (
            <></>
          )}
        </DetailItemContainer>
      </TransferDetailContent>
      <CloseDiv onClick={props.onclick}>&lt;</CloseDiv>
      {videoOpen && selectedParaItem !== undefined && selectedParaItem.transferId !== undefined ? (
        <VideoModal transferId={selectedParaItem.transferId} closeModal={closeModal}></VideoModal>
      ) : (
        <></>
      )}
    </TransferDetailContainer>
  );
};

export default TransferDetail;
