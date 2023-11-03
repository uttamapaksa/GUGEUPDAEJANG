import {
  HospitalMainSidebarContainer,
  HospitalMainSidebarContents,
  TypeButton,
  TypeButtonGroup,
} from "./HospitalMainSidebar.style";
import { useRecoilState } from "recoil";
import { hospitalSidebarType } from "../../../../recoils/HospitalAtoms";
import ParamedicList from "./ParamedicList/ParamedicList";
// import { useEffect } from "react";

const HospitalMainSidebar = () => {
  const [sidebarType, setSidebarType] = useRecoilState(hospitalSidebarType);

  const changeSidebarState = (flag: boolean) => {
    setSidebarType(flag);
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
        {sidebarType ? <ParamedicList /> : <></>}
      </HospitalMainSidebarContents>
      {/*  */}
    </HospitalMainSidebarContainer>
  );
};

export default HospitalMainSidebar;
