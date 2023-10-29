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
          $width="3vw"
          $height="3vw"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="0.25vw 0"
        />
      ) : (
        <ImgTransferDeactivate
          $width="2.3vw"
          $height="2vw"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="0.75vw 0"
          onClick={() => changeButtonState(0)}
        />
      )}
      {buttonState[1] ? (
        <ImgHistoryActivate
          $width="3vw"
          $height="3vw"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="0.25vw 0"
        />
      ) : (
        <ImgHistoryDeactivate
          $width="2vw"
          $height="2vw"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="0.75vw 0"
          onClick={() => changeButtonState(1)}
        />
      )}
      {buttonState[2] ? (
        <ImgStatisticActivate
          $width="3vw"
          $height="3vw"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="0.25vw 0"
        />
      ) : (
        <ImgStatisticDeactivate
          $width="2.5vw"
          $height="2.5vw"
          $position="relative"
          $left="50%"
          $transform="translate(-50%, 0%)"
          $margin="0.5vw 0"
          onClick={() => changeButtonState(2)}
        />
      )}
    </SidebarContainer>
  );
};

export default HopsitalSidebar;
