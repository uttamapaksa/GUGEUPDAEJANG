import { 
  useEffect, 
  useState } from "react";

import Map, { MapProps } from "/src/components/libraries/Map/Map";
import * as S from './GuestMap.style';

function GuestMap () {
  const [mapProps, setMapProps] = useState<MapProps>();

  const changePosition = () =>{
    const nextMapProps: MapProps = {
      type: "hospital",
      pos: { lat: 37.565138, lon: 126.983655 },
    }
    setMapProps(nextMapProps)
  }
  
  useEffect(()=>{
    changePosition();
  },[])

  return (
    <S.Container>
      {mapProps !== undefined ?
      <Map {...mapProps}></Map>: <></>}
    </S.Container>
  )
}

export default GuestMap