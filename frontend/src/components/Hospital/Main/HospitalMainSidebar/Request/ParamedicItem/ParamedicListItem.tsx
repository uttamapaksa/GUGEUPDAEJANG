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
import Swal from "sweetalert2";

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
    if (scrollRef.current != null) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getAxiosReturn = async (res: boolean) => {
    console.log(res);
    let response;
    if (!res) {
      response = await Swal.fire({
        title: "거절 사유 입력",
        text: "거절 사유를 입력해주세요.",
        input: "text",
        inputPlaceholder: "거절 사유를 입력해주세요.",
      }).then(async (inputReason) => {
        console.log(inputReason);
        if (inputReason.value != null) {
          const postProps: HospitalResponsePostProps = {
            callingId: props.id,
            status: "REJECTED",
            reason: inputReason.value,
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
      });
    } else {
      const postProps: HospitalResponsePostProps = {
        callingId: props.id,
        status: "APPROVED",
        reason: "",
      };
      response = await putHospitalResponse(postProps);
    }
    return response;
  };

  const clickButton = async (res: boolean) => {
    const response: any = await getAxiosReturn(res);
    if (res) {
      if (response === undefined) {
        // alert("HospitalResponse 실패");
        Swal.fire("병원 응답 실패", "HospitalResponse is undefined", "error");
        return;
      } else if (response.data.isFull) {
        console.log(response);
        // alert("HospitalResponse isFull");
        Swal.fire("병원 잔여 병상 없음", "HospitalResponse isFull", "error");
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
      }
    }
    if (requestList !== undefined) {
      let nextRequestList = requestList.filter((item: ParaRequestItem) => item.id != props.id);
      setRequestList(nextRequestList);
    }
    if (selectedParaItem !== undefined && selectedParaItem.id == props.id) {
      setSelectedParaItem(undefined);
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
