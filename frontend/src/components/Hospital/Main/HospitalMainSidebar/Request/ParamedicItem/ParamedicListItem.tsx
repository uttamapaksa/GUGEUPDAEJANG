import { useEffect, useRef, useState } from "react";
import {
  ParamedicItemContainer,
  ParamedicItemContent,
  ItemRequestAt,
  ItemParaType,
  ItemParaInfo,
  ItemParaTagGroup,
} from "./ParamedicListItem.style";
import A from "/src/components/Commons/Atoms";
import theme from "/src/styles";
import { HospitalResponsePostProps, HospitalTransferItem, ParaRequestItem } from "/src/types/map";
import { useRecoilState } from "recoil";
import {
  hospitalParmedicRequestList,
  hospitalSelectedRequestItem,
  hospitalParmedicTransferList,
} from "/src/recoils/HospitalAtoms";
import { AGEGROUP, GENDER } from "/src/constants/variable";
import { timeToString, turmToString } from "/src/constants/function";
import { putHospitalResponse } from "/src/apis/hospital";
import { DetailItemBetween, ItemElapseMin } from "../ParamedicDetail/ParamedicDetail.style";

const ParamedicListItem = (props: any) => {
  // const setCurResponse = useSetRecoilState(hospitalResponse); //http post로 수정 예정
  const [requestList, setRequestList] = useRecoilState(hospitalParmedicRequestList);
  const [transferList, setTransferList] = useRecoilState(hospitalParmedicTransferList);
  const [selectedParaItem, setSelectedParaItem] = useRecoilState(hospitalSelectedRequestItem);

  const [scrollMoved, setScrollMoved] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(props);
    if (props.isSelected) setScrollMoved(true);
    else setScrollMoved(false);
  }, [props]);

  useEffect(() => {
    if (scrollMoved) moveScroll();
  }, [scrollMoved]);
  const moveScroll = () => {
    console.log(scrollRef);
    if (scrollRef.current != null) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const checkFull = async (res: boolean) => {
    if (!res) {
      let inputReason = prompt("사유를 입력하세요", "");
      if (inputReason != null) {
        const postProps: HospitalResponsePostProps = {
          callingId: props.id,
          status: "REJECTED",
          reason: inputReason,
        };
        return await putHospitalResponse(postProps);
      } else {
        const postProps: HospitalResponsePostProps = {
          callingId: props.id,
          status: "REJECTED",
          reason: "사유 없음",
        };
        return await putHospitalResponse(postProps);
      }
    } else {
      const postProps: HospitalResponsePostProps = {
        callingId: props.id,
        status: "APPROVED",
        reason: "",
      };
      return await putHospitalResponse(postProps);
    }
  };

  const clickButton = async (res: boolean) => {
    const response = await checkFull(res);
    if (response === undefined) {
      alert("HospitalResponse 실패");
      return;
    } else if (response.data.isFull) {
      alert("HospitalResponse isFull");
      setRequestList([]);
      return;
    } else if (requestList !== undefined) {
      if (res) {
        const newTransferItem: HospitalTransferItem = {
          id: props.id,
          state: "wait",
          data: props,
        };
        if (transferList !== undefined) {
          setTransferList([...transferList, newTransferItem]);
        } else {
          setTransferList([newTransferItem]);
        }
      }

      let nextRequestList = requestList.filter((item: ParaRequestItem) => item.id != props.id);
      setRequestList(nextRequestList);

      if (selectedParaItem !== undefined && selectedParaItem.id == props.id) {
        setSelectedParaItem(undefined);
      }
    }
  };

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
          $fontSize={theme.font.Small5_12}
        >
          {props.ktas}
        </A.DivKtasInfo>
        <ItemRequestAt>{timeToString(props.createdAt)}</ItemRequestAt>
        <DetailItemBetween>
          <ItemParaType>
            {AGEGROUP[props.ageGroup]} ({GENDER[props.gender]})
          </ItemParaType>
          <ItemElapseMin>요청 대기 {turmToString(props.createdAt)}분 경과</ItemElapseMin>
        </DetailItemBetween>
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
            >
              {item}
            </A.DivTag>
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
