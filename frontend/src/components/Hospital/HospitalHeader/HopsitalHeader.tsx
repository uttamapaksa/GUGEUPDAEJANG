import styled from "styled-components";
import Map, { MapProps } from "/src/components/libraries/Map/Map";
import theme from "/src/styles";
import { ImgLogo, ImgLogoHospital } from "../../Commons/Atoms/Image";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5%;
  position: fixed;
  background-color: ${theme.color.white};
  z-index: 10001;
`;

const HopsitalHeader = () => {
  return (
    <HeaderContainer>
        {/* transform: translate(-50%, -50%); */}
      <ImgLogo $height="100%" $position="absolute" $top="10%"></ImgLogo>
      <ImgLogoHospital $height="80%" $position="absolute" $top="10%" $right="20px"></ImgLogoHospital>
    </HeaderContainer>
  );
};

export default HopsitalHeader;
