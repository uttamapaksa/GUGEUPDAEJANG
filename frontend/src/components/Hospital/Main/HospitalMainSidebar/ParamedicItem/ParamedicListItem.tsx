import { useEffect, useRef, useState } from "react";
import { ParamedicItemContainer, ParamedicItemContent, ItemRequestAt, ItemParaType, ItemParaInfo, ItemParaTagGroup } from "./ParamedicListItem.style";
import A from "/src/components/Commons/Atoms";
import theme from "/src/styles";

const ParamedicListItem = (props: any) => {
  const [scrollMoved, setScrollMoved] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props.isSelected) setScrollMoved(true);
    else setScrollMoved(false);
  }, [props])
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
    <ParamedicItemContainer ref={scrollRef}>
      <ParamedicItemContent onClick={props.onclick} $isSelected={props.isSelected}>
        <A.DivKtasInfo
          $position="absolute"
          $right="0%"
          $top="0%"
          $ktas={props.ktas}
          $width="50px"
          $height="25px"
          $borderRadius="0px 0px 0px 10px"
          $fontSize={theme.font.Small5_12}>
          KTAS{props.ktas.charAt(4)}
        </A.DivKtasInfo>
        <ItemRequestAt>{props.requestAt}</ItemRequestAt>
        <ItemParaType>{props.paraType}</ItemParaType>
        <ItemParaInfo>{props.paraInfo}</ItemParaInfo>
        <ItemParaTagGroup>
          {props.paraTag.map((item: string, index: number) => (
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

        <A.BtnToggle
          $width="50%"
          $height="30px"
          $position="absolute"
          $left="0%"
          $bottom="0%"
          $borderRadius="0px"
          $color={theme.color.pinkDrak}
          $fontSize={theme.font.Small1_16}
          $boxShadow="0 0.2px 0.1px 0px inset"
        >
          거절
        </A.BtnToggle>

        <A.BtnToggle
          $width="50%"
          $height="30px"
          $position="absolute"
          $right="0%"
          $bottom="0%"
          $borderRadius="0px"
          $color={theme.color.white}
          $fontSize={theme.font.Small1_16}
          $backgroundColor={theme.color.pinkDrak}
          $boxShadow="0 0.2px 0.1px 0px inset" >
          승인
        </A.BtnToggle>
      </ParamedicItemContent>
    </ParamedicItemContainer>
  );
};

export default ParamedicListItem;
