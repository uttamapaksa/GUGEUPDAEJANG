import { useEffect, useState } from "react";
import { HospitalMainSidebarContainer, HospitalMainSidebarContents, TypeButton, TypeButtonGroup } from "./HospitalMainSidebar.style";
import { useRecoilState } from "recoil";
import { hospitalSidebarType } from "../../HospitalAtoms";
import ParamedicList from "./ParamedicList/ParamedicList";
import { MapProps } from "/src/components/libraries/Map/Map";



const HospitalMainSidebar = (props: MapProps) => {
  const [sidebarType, setSidebarType] = useRecoilState(hospitalSidebarType);

  const changeSidebarState = (flag: boolean) => {
    console.log(flag)
    setSidebarType(flag);
  }

  return (
    <HospitalMainSidebarContainer>
      {/* 사이드바 타입 */}
      <TypeButtonGroup>
        <TypeButton
          $checked={sidebarType}
          onClick={() => changeSidebarState(true)}>
          이송 대기 목록
        </TypeButton>
        <TypeButton
          $checked={!sidebarType}
          onClick={() => changeSidebarState(false)}>
          이송 중
        </TypeButton>
      </TypeButtonGroup>

      {/* 리스트 */}
      <HospitalMainSidebarContents>
        {sidebarType ? <ParamedicList {...props} /> : <></>}

      </HospitalMainSidebarContents>
      {/*  */}
    </HospitalMainSidebarContainer >
  );
};

export default HospitalMainSidebar;
