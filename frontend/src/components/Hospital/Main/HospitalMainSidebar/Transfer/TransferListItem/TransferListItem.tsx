import { useEffect, useRef, useState } from "react";
import { TransferListItemContainer, TransferListItemContent, ItemRequestAt, ItemParaType, ItemParaTagGroup, VideoOn, ItemBottomDiv } from "./TransferListItem.style";
import A from "/src/components/Commons/Atoms";
import theme from "/src/styles";
import { hospitalParmedicTransferList, hospitalSelectedTransferItem } from "/src/recoils/HospitalAtoms";
import { expectedTime, timeToString, turmToString } from "/src/constants/function";
import { AGEGROUP, GENDER } from "/src/constants/variable";
import { HospitalTransferItem } from "/src/types/map";
import { useRecoilState } from "recoil";
import { DetailItemBetween, ItemElapseMin } from "../TransferDetail/TransferDetail.style";

const TransferListItem = (props: any) => {
  const [transferList, setTransferList] = useRecoilState(hospitalParmedicTransferList);
  const [selectedParaItem, setSelectedParaItem] = useRecoilState(hospitalSelectedTransferItem);

  const [scrollMoved, setScrollMoved] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(props, transferList)
    if (props.isSelected) setScrollMoved(true);
    else setScrollMoved(false);
  }, [props.data])
  useEffect(() => {
    if (scrollMoved) moveScroll();
  }, [scrollMoved])
  const moveScroll = () => {
    console.log(scrollRef)
    if (scrollRef.current != null) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clickButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (transferList != undefined) {
      console.log("clickButton", transferList)
      let nextTransferList = transferList.filter((item: HospitalTransferItem) => item.id != props.id);
      setTransferList(nextTransferList);
    }
    if (selectedParaItem !== undefined && selectedParaItem.id == props.id) {
      setSelectedParaItem(undefined);
    }
  };

  return (
    <TransferListItemContainer ref={scrollRef}>
      <TransferListItemContent onClick={props.onclick} $isSelected={props.isSelected}>
        <A.DivKtasInfo
          $position="absolute"
          $right="0%"
          $top="0%"
          $ktas={props.data.ktas.toLowerCase()}
          $width="50px"
          $height="25px"
          $borderRadius="0px 0px 0px 10px"
          $fontSize={theme.font.Small5_12}>
          {props.data.ktas}
        </A.DivKtasInfo>
        <ItemRequestAt>{timeToString(props.data.createdAt)}</ItemRequestAt>
        <DetailItemBetween>
          <ItemParaType>
            {AGEGROUP[props.data.ageGroup]} ({GENDER[props.data.gender]})
          </ItemParaType>
          <ItemElapseMin>요청 이후 {turmToString(props.data.createdAt)}분 경과</ItemElapseMin>
        </DetailItemBetween>
        <ItemParaTagGroup>
          {props.data.tags.map((item: string, index: number) => (
            <A.DivTag
              key={index}
              $margin="2px 5px 50px 2px"
              $width="fit-content"
              $height="18px"
              $borderRadius="5px"
              $textAlign="center"
              $padding="2px"
              $fontSize={theme.font.Small5_12}
            >{item}</A.DivTag>
          ))}
        </ItemParaTagGroup>

        {/* <VideoOn>
          화상통화 연결 됨
        </VideoOn> */}
        {props.videoOn &&
          <VideoOn>
            화상통화 연결 됨
          </VideoOn>}

        {props.state == "transfer" ?
          <ItemBottomDiv
            $color={theme.color.white}
            $backgroundColor={theme.color.blue}
          >
            {/* {props.leftTime}분 이내 도착 예정 */}
            도착 예정 시간 : {expectedTime(props.data.createdAt, props.data.duration)}
          </ItemBottomDiv> : <></>}
        {props.state == "wait" ?
          <ItemBottomDiv
            $color={theme.color.black}
            $backgroundColor={theme.color.ktas3_Active}>
            대기중
          </ItemBottomDiv> : <></>}
        {props.state == "complete" ?
          <ItemBottomDiv
            $color={theme.color.white}
            $backgroundColor={theme.color.ktas4_Active}
            onClick={clickButton}>
            완료됨
          </ItemBottomDiv> : <></>}
        {props.state == "cancel" ?
          <ItemBottomDiv
            $color={theme.color.white}
            $backgroundColor={theme.color.ktas2_Active}
            onClick={clickButton}>
            취소됨
          </ItemBottomDiv> : <></>}
      </TransferListItemContent>
    </TransferListItemContainer>
  );
};

export default TransferListItem;
