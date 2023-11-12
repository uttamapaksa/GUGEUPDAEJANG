import { 
  useEffect } from "react";

import * as S from './GuestMap.style';
import Map from "/src/components/libraries/Map/Map";
import { 
  GuestMapProps, 
  MapProps } from "/src/types/map";
import { currentPosition } from "/src/recoils/HospitalAtoms";
import { useRecoilValue } from "recoil";

function GuestMap ({ mapProps, setMapProps }: GuestMapProps) {
  const currPosition = useRecoilValue(currentPosition);

  const changePosition = () =>{
    const nextMapProps: MapProps = {
      type: "guest",
      pos: { lat: currPosition.lat, lon: currPosition.lon },
      hosList: []
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