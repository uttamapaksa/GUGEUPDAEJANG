import { useRecoilState } from "recoil";
import { ItemParaType, ItemRequestAt } from "../ParamedicItem/ParamedicListItem.style";
import {
  CloseDiv,
  DetailItemContainer,
  ItemElapseMin,
  ItemAddr,
  ParamedicDetailContainer,
  ParamedicDetailContent,
  DetailItemBetween,
  ItemLeftTime,
} from "./ParamedicDetail.style";
import A from "/src/components/Commons/Atoms";
import theme from "/src/styles";
import {
  hospitalParmedicRequestList,
  hospitalParmedicTransferList,
  hospitalSelectedRequestItem,
} from "/src/recoils/HospitalAtoms";
import { HospitalResponsePostProps, HospitalTransferItem, ParaRequestItem } from "/src/types/map";
import { timeToString, turmToString } from "/src/constants/function";
import { AGEGROUP, GENDER } from "/src/constants/variable";
import { putHospitalResponse } from "/src/apis/hospital";

const ParamedicDetail = (props: any) => {
  const [requestList, setRequestList] = useRecoilState(hospitalParmedicRequestList);
  const [transferList, setTransferList] = useRecoilState(hospitalParmedicTransferList);
  const [selectedParaItem, setSelectedParaItem] = useRecoilState(hospitalSelectedRequestItem);

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
    console.log("clickButton response", response);
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
    <ParamedicDetailContainer>
      <ParamedicDetailContent>
        <DetailItemContainer>
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

          <div style={{ width: "90%", margin: "0 auto" }}>
            {props.tags.map((item: string, index: number) => (
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

          {/* <video style={{ border: "1px solid gray" }}></video> */}

          <div style={{ width: "90%", margin: "0 auto" }}>
            {props.files.map((item: string, index: number) => (
              <img key={index} src={item}></img>
            ))}
          </div>

          <ItemAddr>{props.description}</ItemAddr>
          <ItemAddr>{props.address}</ItemAddr>
          <DetailItemBetween>
            <ItemElapseMin>{props.distance} km</ItemElapseMin>
            <ItemLeftTime>{props.duration}분 이내 도착 가능</ItemLeftTime>
          </DetailItemBetween>

          <A.BtnToggle
            $width="50%"
            $height="50px"
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
            $height="50px"
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
        </DetailItemContainer>
      </ParamedicDetailContent>
      <CloseDiv onClick={props.onclick}>&lt;</CloseDiv>
    </ParamedicDetailContainer>
  );
};

export default ParamedicDetail;

// id: number,
// addr: string,
// pos: Position,
// ktas: string,
// elapseMin: number,
// leftTime: number,
// paraType: string,
// paraTag: string[],
// paraInfo: string,
// requestAt?: string,
