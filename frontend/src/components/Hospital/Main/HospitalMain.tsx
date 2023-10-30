import styled from "styled-components";
import { ImgLogo, ImgLogoHospital } from "../../Commons/Atoms/Image";
import HospitalMap from "./HospitalMap/HospitalMap";
import { MapProps } from "../../libraries/Map/Map";
import HospitalMainSidebar from "./HospitalMainSidebar/HospitalMainSidebar";
import { Container } from "./HospitalMain.styls";

const HospitalMain = (props: MapProps) => {

  return (
    <Container>
      <HospitalMainSidebar {...props} />
      {/* 상태 버튼 */}
      {/* 리스트 (타입) */}
      {/* 리스트 상세 (열닫 가능) */}
      <></>
      <HospitalMap {...props} />
    </Container>
  );
};

export default HospitalMain;
