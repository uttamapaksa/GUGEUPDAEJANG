import styled from "styled-components";
import Map, { MapProps } from "/src/components/libraries/Map/Map";
import {
  ImgHistoryActivate,
  ImgHistoryDeactivate,
  ImgStatisticActivate,
  ImgStatisticDeactivate,
  ImgTransferActivate,
  ImgTransferDeactivate,
} from "../../Commons/Atoms/Image";
import { useRecoilState } from "recoil";
import { hospitalComponentType } from "../HospitalAtoms";
import { SidebarContainer } from "./HopsitalSidebar.style";


const HopsitalSidebar = () => {
  
  const [buttonState, setButtonState] = useRecoilState(hospitalComponentType);

  const changeButtonState = (idx: number) => {
    let tmp = [false, false, false];
    tmp[idx] = true;
    setButtonState(tmp);
  };

  return (
    <SidebarContainer>
      {buttonState[0] ? (
        <ImgTransferActivate
          $width="30px"
          $height="30px"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="4px auto"
        />
      ) : (
        <ImgTransferDeactivate
          $width="26px"
          $height="22px"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="8px auto"
          onClick={() => changeButtonState(0)}
        />
      )}
      {buttonState[1] ? (
        <ImgHistoryActivate
          $width="30px"
          $height="30px"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="4px auto"
        />
      ) : (
        <ImgHistoryDeactivate
          $width="26px"
          $height="26px"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="6px auto"
          onClick={() => changeButtonState(1)}
        />
      )}
      {buttonState[2] ? (
        <ImgStatisticActivate
          $width="30px"
          $height="30px"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="4px auto"
        />
      ) : (
        <ImgStatisticDeactivate
          $width="26px"
          $height="26px"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="6px auto"
          onClick={() => changeButtonState(2)}
        />
      )}
    </SidebarContainer>
  );
};

export default HopsitalSidebar;
