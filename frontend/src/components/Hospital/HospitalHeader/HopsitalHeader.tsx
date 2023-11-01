import A from "/src/components/Commons/Atoms";
import { HeaderContainer } from "./HopsitalHeader.style";

const HopsitalHeader = () => {
  return (
    <HeaderContainer>
      <A.ImgLogo $height="60%" $position="absolute" $top="50%" $left="1%" $transform="translate(0, -50%)"/>
      <A.ImgLogoHospital $height="70%" $position="absolute" $top="50%" $right="1%" $transform="translate(0, -50%)"/>
    </HeaderContainer>
  );
};

export default HopsitalHeader;
