import A from "/src/components/Commons/Atoms";
import { HeaderContainer, HeaderHospitalLogo } from "./HopsitalHeader.style";
import { useRecoilState } from "recoil";
import { hospitalInfoState } from "/src/recoils/AuthAtoms";
import { useState } from "react";
import MenuListBar from "./MenuListBar";

const HopsitalHeader = () => {
  const [hospitalInfo, setHospitalInfo] = useRecoilState(hospitalInfoState);
  const [MenuIsShown, setMenuIsShown] = useState(false);

  return (
    <HeaderContainer>
      <A.ImgLogo $height="60%" $position="absolute" $top="50%" $left="1%" $transform="translate(0, -50%)" />

      <HeaderHospitalLogo onClick={()=>{setMenuIsShown(true)}}>
        {hospitalInfo.imageUrl && hospitalInfo.imageUrl !== null ? 
        <img src={hospitalInfo.imageUrl} style={{height:"100%"}}></img> :
        <><A.ImgLogoHospital $height="100%" /> {setHospitalInfo.name}</>
        }
        
      </HeaderHospitalLogo>
      {MenuIsShown ? <MenuListBar setMenuIsShown={setMenuIsShown} /> : ""}
    </HeaderContainer>
  );
};

export default HopsitalHeader;
