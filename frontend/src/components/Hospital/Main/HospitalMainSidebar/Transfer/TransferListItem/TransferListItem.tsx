import { useEffect, useRef, useState } from "react";
import { TransferListItemContainer, TransferListItemContent, ItemRequestAt, ItemParaType, ItemParaInfo, ItemParaTagGroup } from "./TransferListItem.style";
import A from "/src/components/Commons/Atoms";
import theme from "/src/styles";
import { useSetRecoilState } from "recoil";
import { hospitalResponse } from "/src/recoils/HospitalAtoms";

const TransferListItem = (props: any) => {
  const setCurResponse = useSetRecoilState(hospitalResponse);

  const [scrollMoved, setScrollMoved] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(props.data)
    if (props.data.isSelected) setScrollMoved(true);
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
        <ItemRequestAt>{props.data.duration}</ItemRequestAt>
        <ItemParaType>{props.data.ageGroup}</ItemParaType>
        {/* <ItemParaType>{props.data.gender}</ItemParaType> */}
        <ItemParaInfo>{props.data.description}</ItemParaInfo>
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
        {props.state == "transfer" ?
          <A.DivTag
            $width="100%"
            $height="15%"
            $position="absolute"
            $left="0%"
            $bottom="0%"
            $color={theme.color.white}
            $borderRadius="0px"
            $fontSize={theme.font.Small1_16}
            $backgroundColor={theme.color.blue}
            $boxShadow=""
          >
            {3}분 이내 도착 예정
          </A.DivTag> : <></>}
        {props.state == "wait" ?
          <A.DivTag
            $width="100%"
            $height="15%"
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
          </A.DivTag> : <></>}
        {props.state == "complete" ?
          <A.DivTag
            $width="100%"
            $height="15%"
            $position="absolute"
            $left="0%"
            $bottom="0%"
            $color={theme.color.white}
            $borderRadius="0px"
            $fontSize={theme.font.Small1_16}
            $backgroundColor={theme.color.ktas4_Active}
            $boxShadow="0"
          >
            완료됨
          </A.DivTag> : <></>}
        {props.state == "cancel" ?
          <A.DivTag
            $width="100%"
            $height="15%"
            $position="absolute"
            $left="0%"
            $bottom="0%"
            $color={theme.color.white}
            $borderRadius="0px"
            $fontSize={theme.font.Small1_16}
            $backgroundColor={theme.color.ktas2_Active}
            $boxShadow="0"
          >
            취소됨
          </A.DivTag> : <></>}
      </TransferListItemContent>
    </TransferListItemContainer>
  );
};

export default TransferListItem;
