import { 
  useState } from "react";

import * as S from './Main.style';
import A from "/src/components/Commons/Atoms/index"
import { MapProps } from "/src/components/libraries/Map/Map";
import GuestMap from '/src/components/Guest/Main/GuestMap/GuestMap';

function Main() {
  const [mapProps, setMapProps] = useState<MapProps>();

  return (
    <S.Container>
      <GuestMap 
        mapProps={mapProps} 
        setMapProps={setMapProps}/>
      
      <S.ContentBox>
        <A.ImgBar
          $position="relative"
          $margin="2vh 0px 2vh 0px"
          $width="50px"
          $height="8px"/>
      </S.ContentBox>

      
  </S.Container>
  );
}

export default Main;
