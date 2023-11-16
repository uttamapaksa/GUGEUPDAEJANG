import A from "/src/components/Commons/Atoms";
import { useRecoilState } from "recoil";
import {
  hospitalComponentType,
  hospitalSelectedRequestItem,
  hospitalSidebarType,
} from "../../../recoils/HospitalAtoms";
import { SidebarContainer, SidebarContent, SidebarHoverContent } from "./HopsitalSidebar.style";
import { useState, useEffect } from "react";

const HopsitalSidebar = () => {
  const [buttonState, setButtonState] = useRecoilState(hospitalComponentType);
  const [sidbarState, setSidbarState] = useRecoilState(hospitalSidebarType);
  const [selectedParaId, setSelectedParaId] = useRecoilState(hospitalSelectedRequestItem);

  const [hover, setHover] = useState<string>("");

  const changeButtonState = (idx: number) => {
    let tmp = [false, false, false];
    tmp[idx] = true;
    setButtonState(tmp);
  };

  useEffect(() => {
    if (selectedParaId !== undefined) setSelectedParaId(undefined);
    if (!sidbarState) setSidbarState(true);
  }, [buttonState]);

  return (
    <SidebarContainer>
      <SidebarContent onMouseEnter={() => setHover("0")} onMouseLeave={() => setHover("")}>
        {buttonState[0] ? (
          <A.ImgTransferActivate
            $width="30px"
            $height="30px"
            $position="relative"
            $left="50%"
            $transform="translate(-50%, 0%)"
            $margin="4px auto"
          />
        ) : (
          <A.ImgTransferDeactivate
            $width="26px"
            $height="22px"
            $position="relative"
            $left="50%"
            $transform="translate(-50%, 0%)"
            $margin="8px auto"
            onClick={() => changeButtonState(0)}
          />
        )}
        {hover==="0" && <SidebarHoverContent>이송현황</SidebarHoverContent>}
      </SidebarContent>
      <SidebarContent onMouseEnter={() => setHover("1")} onMouseLeave={() => setHover("")}>
        {buttonState[1] ? (
          <A.ImgHistoryActivate
            $width="30px"
            $height="30px"
            $position="relative"
            $left="50%"
            $transform="translate(-50%, 0%)"
            $margin="4px auto"
          />
        ) : (
          <A.ImgHistoryDeactivate
            $width="26px"
            $height="26px"
            $position="relative"
            $left="50%"
            $transform="translate(-50%, 0%)"
            $margin="6px auto"
            onClick={() => changeButtonState(1)}
          />
        )}
        {hover==="1" && <SidebarHoverContent>히스토리</SidebarHoverContent>}
      </SidebarContent>
      <SidebarContent onMouseEnter={() => setHover("2")} onMouseLeave={() => setHover("")}>
        {buttonState[2] ? (
          <A.ImgStatisticActivate
            $width="30px"
            $height="30px"
            $position="relative"
            $left="50%"
            $transform="translate(-50%, 0%)"
            $margin="4px auto"
          />
        ) : (
          <A.ImgStatisticDeactivate
            $width="26px"
            $height="26px"
            $position="relative"
            $left="50%"
            $transform="translate(-50%, 0%)"
            $margin="6px auto"
            onClick={() => changeButtonState(2)}
          />
        )}
        {hover==="2" && <SidebarHoverContent>리포트</SidebarHoverContent>}
      </SidebarContent>
    </SidebarContainer>
  );
};

export default HopsitalSidebar;
