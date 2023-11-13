import { 
  useEffect } from "react";

import * as S from './GuestMap.style';
import Map from "/src/components/libraries/Map/Map";
import { 
  GuestMapProps, 
  HospitalItem, 
  MapProps } from "/src/types/map";
import { currentPosition } from "/src/recoils/HospitalAtoms";
import { useRecoilValue } from "recoil";
import { GuestHospitalListState } from "/src/recoils/GuestAtoms";

function GuestMap ({ mapProps, setMapProps }: GuestMapProps) {
  const currPosition = useRecoilValue(currentPosition);
  const guestHospitals = useRecoilValue(GuestHospitalListState);

  const changePosition = () =>{
    const hosList: HospitalItem[] = guestHospitals.map((hospital) => ({
      id: hospital.id,
      pos: { lat: hospital.latitude, lon: hospital.longitude },
    }));

    const nextMapProps: MapProps = {
      type: "guest",
      pos: { lat: currPosition.lat ?? 0, lon: currPosition.lon ?? 0 },
      hosList: hosList ? hosList : undefined,
    }
    setMapProps(nextMapProps)
  }
  useEffect(()=>{
    changePosition();
  },[guestHospitals, currPosition])

  return (
    <S.Container>
      {mapProps !== undefined ?
      <Map {...mapProps}></Map>: <></>}
    </S.Container>
  )
}

export default GuestMap