import { useEffect, useRef, useState } from "react";
import { ParamedicItemContainer, ParamedicItemContent, ItemRequestAt, ItemParaType, ItemParaInfo, ItemParaTagGroup } from "./ParamedicListItem.style";
import A from "/src/components/Commons/Atoms";
import theme from "/src/styles";
import { HospitalResponseItem } from "/src/types/map";
import { useSetRecoilState } from "recoil";
import { hospitalResponse } from "/src/recoils/HospitalAtoms";

const ParamedicListItem = (props: any) => {
  const setCurResponse = useSetRecoilState(hospitalResponse);

  const [scrollMoved, setScrollMoved] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(props)
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

  const clickButton = (res: boolean) => {
    const response:HospitalResponseItem = {
      id: props.id,
      responseAt: new Date().toLocaleDateString(),
      responseType: res,
    }
    setCurResponse(response)
  }


  return (
    <ParamedicItemContainer ref={scrollRef}>
      <ParamedicItemContent onClick={props.onclick} $isSelected={props.isSelected}>
        <A.DivKtasInfo
          $position="absolute"
          $right="0%"
          $top="0%"
          $ktas={props.ktas.toLowerCase()}
          $width="50px"
          $height="25px"
          $borderRadius="0px 0px 0px 10px"
          $fontSize={theme.font.Small5_12}>
          {props.ktas}
        </A.DivKtasInfo>
        <ItemRequestAt>{props.duration}</ItemRequestAt>
        <ItemParaType>{props.ageGroup}</ItemParaType>
        {/* <ItemParaType>{props.gender}</ItemParaType> */}
        <ItemParaInfo>{props.description}</ItemParaInfo>
        <ItemParaTagGroup>
          {props.tags.map((item: string, index: number) => (
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
          onClick={()=>clickButton(false)}
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
          $boxShadow="0 0.2px 0.1px 0px inset" 
          onClick={()=>clickButton(true)}
          >
          승인
        </A.BtnToggle>
      </ParamedicItemContent>
    </ParamedicItemContainer>
  );
};

export default ParamedicListItem;
