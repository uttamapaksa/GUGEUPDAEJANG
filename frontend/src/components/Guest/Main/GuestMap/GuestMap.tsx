import { 
  useEffect } from "react";

import * as S from './GuestMap.style';
import Map from "/src/components/libraries/Map/Map";
import { 
  GuestMapProps, 
  MapProps } from "/src/types/map";

function GuestMap ({ mapProps, setMapProps }: GuestMapProps) {
  const changePosition = () =>{
    const nextMapProps: MapProps = {
      type: "hospital",
      pos: { lat: 37.565138, lon: 126.983655 }
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