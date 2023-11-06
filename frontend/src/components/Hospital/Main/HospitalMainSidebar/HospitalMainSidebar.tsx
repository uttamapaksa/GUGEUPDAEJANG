import {
  HospitalMainSidebarContainer,
  HospitalMainSidebarContents,
  TypeButton,
  TypeButtonGroup,
} from "./HospitalMainSidebar.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { hospitalSelectedRequestItem, hospitalSelectedTransferItem, hospitalSidebarType } from "../../../../recoils/HospitalAtoms";
import ParamedicList from "./Request/ParamedicList/ParamedicList";
import TransferList from "./Transfer/TransferList/TransferList";
// import { useEffect } from "react";

const HospitalMainSidebar = () => {
  const [sidebarType, setSidebarType] = useRecoilState(hospitalSidebarType);
  const setRequestItem = useSetRecoilState(hospitalSelectedRequestItem);
  const setTransferItem = useSetRecoilState(hospitalSelectedTransferItem);

  const changeSidebarState = (flag: boolean) => {
    setSidebarType(flag);
    setRequestItem(undefined);
    setTransferItem(undefined);
  };

  // useEffect(() => {
  //   console.log(sidebarType)
  // }, [sidebarType])

  return (
    <HospitalMainSidebarContainer>
      {/* 사이드바 타입 */}
      <TypeButtonGroup>
        <TypeButton $checked={sidebarType} onClick={() => changeSidebarState(true)}>
          이송 대기 목록
        </TypeButton>
        <TypeButton $checked={!sidebarType} onClick={() => changeSidebarState(false)}>
          이송 중
        </TypeButton>
      </TypeButtonGroup>

      {/* 리스트 */}
      <HospitalMainSidebarContents>
        {sidebarType ? <ParamedicList /> : <TransferList/>}
      </HospitalMainSidebarContents>
      {/*  */}
    </HospitalMainSidebarContainer>
  );
};

export default HospitalMainSidebar;
