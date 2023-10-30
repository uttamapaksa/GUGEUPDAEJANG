import styled from "styled-components";
import Map, { MapProps } from "/src/components/libraries/Map/Map";
import { ImgLogo, ImgLogoHospital } from "../../Commons/Atoms/Image";
import { HeaderContainer } from "./HopsitalHeader.style";

const HopsitalHeader = () => {
  return (
    <HeaderContainer>
      <ImgLogo $height="60%" $position="absolute" $top="50%" $left="1%" $transform="translate(0, -50%)"></ImgLogo>
      <ImgLogoHospital $height="70%" $position="absolute" $top="50%" $right="1%" $transform="translate(0, -50%)"></ImgLogoHospital>
    </HeaderContainer>
  );
};

export default HopsitalHeader;
