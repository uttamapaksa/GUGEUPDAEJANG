import { useEffect } from "react";
import * as S from './ParamedicMapstyle';
import Map from "/src/components/libraries/Map/Map";
import { GuestMapProps, MapProps } from "/src/types/map";

function ParamedicMap({ mapProps, setMapProps }: GuestMapProps) {
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
    <S.Map>
      {mapProps !== undefined ?
      <Map {...mapProps}></Map>: <></>}
    </S.Map>
  );
}

export default ParamedicMap;