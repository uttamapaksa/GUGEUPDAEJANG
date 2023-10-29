import styled from "styled-components";
import { ImgLogo, ImgLogoHospital } from "../../Commons/Atoms/Image";
import HospitalMap from "./HospitalMap/HospitalMap";
import { MapProps } from "../../libraries/Map/Map";

const HospitalMain = (props: MapProps) => {
  return (
    <Container>
      {/* 상태 버튼 */}
      {/* 리스트 (타입) */}
      {/* 리스트 상세 (열닫 가능) */}
      <></>
      <HospitalMap {...props} />
    </Container>
  );
};

export default HospitalMain;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;
