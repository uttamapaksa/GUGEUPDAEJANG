import { useEffect, useRef, useState } from "react";
import { ParamedicItemContainer, ParamedicItemContent, ItemRequestAt, ItemParaType, ItemParaInfo, ItemParaTagGroup } from "./ParamedicListItem.style";
import A from "/src/components/Commons/Atoms";
import theme from "/src/styles";
import { HospitalResponsePostProps, HospitalTransferItem } from "/src/types/map";
import { useRecoilState, useSetRecoilState } from "recoil";
import { hospitalRequestList, hospitalResponse, hospitalSelectedRequestItem, hospitalTransferList } from "/src/recoils/HospitalAtoms";
import { AGEGROUP, GENDER } from "/src/constants/variable";
import { timeToString } from "/src/constants/function";

const ParamedicListItem = (props: any) => {
  // const setCurResponse = useSetRecoilState(hospitalResponse); //http post로 수정 예정
  const [requestList, setRequestList] = useRecoilState(hospitalRequestList);
  const [transferList, setTransferList] = useRecoilState(hospitalTransferList);
  const [selectedParaItem, setSelectedParaItem] = useRecoilState(hospitalSelectedRequestItem);

  const [scrollMoved, setScrollMoved] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(props)
    if (props.isSelected) setScrollMoved(true);
    else setScrollMoved(false);
  }, [props]);

  useEffect(() => {
    if (scrollMoved) moveScroll();
  }, [scrollMoved])
  const moveScroll = () => {
    console.log(scrollRef)
    if (scrollRef.current != null) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const checkFull = async (res: boolean) => {
    const postProps: HospitalResponsePostProps = {
      id: props.id,
      responseType: res,
    }
    console.log("http post 응답 전송 : ", postProps);
    // return await axiosPost();
    //만약 post의 response data가 isFull이면 hospitalRequestList를 빈 배열로 만들기
  }

  const clickButton = (res: boolean) => {
    //병원 응답 http post로 수정 예정
    // const response: HospitalResponseItem = {
    //   id: props.id,
    //   responseAt: new Date().toLocaleDateString(),
    //   responseType: res,
    // }
    // setCurResponse(response)
    //->
    checkFull(res);

    if (requestList !== undefined) {
      let nextList = [];
      for (let i = 0; i < requestList.length; i++) {
        if (requestList[i].id !== props.id) {
          nextList.push(requestList[i]);
        }
        else if (res) {
          let curTransferList: HospitalTransferItem[] = [];
          if (transferList !== undefined) {
            curTransferList = [...transferList];
          }
          const newTransferItem: HospitalTransferItem = {
            id: props.id,
            state: "wait",
            data: props
          }
          curTransferList.push(newTransferItem);
          setTransferList(curTransferList);
        }
        if (selectedParaItem !== undefined && selectedParaItem.id == props.id) {
          setSelectedParaItem(undefined);
        }
      }
      setRequestList(nextList);
    }
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
        <ItemRequestAt>{timeToString(props.createdAt)}</ItemRequestAt>
        <ItemParaType>{AGEGROUP[props.ageGroup]} ({GENDER[props.gender]})</ItemParaType>
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
        <div onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
          <A.BtnToggle
            $width="50%"
            $height="15%"
            $position="absolute"
            $left="0%"
            $bottom="0%"
            $borderRadius="0px"
            $color={theme.color.pinkDrak}
            $fontSize={theme.font.Small1_16}
            $boxShadow="0 0.2px 0.1px 0px inset"
            onClick={() => clickButton(false)}
          >
            거절
          </A.BtnToggle>

          <A.BtnToggle
            $width="50%"
            $height="15%"
            $position="absolute"
            $right="0%"
            $bottom="0%"
            $borderRadius="0px"
            $color={theme.color.white}
            $fontSize={theme.font.Small1_16}
            $backgroundColor={theme.color.pinkDrak}
            $boxShadow="0 0.2px 0.1px 0px inset"
            onClick={() => clickButton(true)}
          >
            승인
          </A.BtnToggle>
        </div>
      </ParamedicItemContent>
    </ParamedicItemContainer>
  );
};

export default ParamedicListItem;
