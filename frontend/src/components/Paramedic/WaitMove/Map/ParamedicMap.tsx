import * as S from './ParamedicMapstyle';
import Map from "/src/components/libraries/Map/Map";
import { MapProps } from "/src/types/map";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isTransferringState } from '/src/recoils/ParamedicAtoms';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import { HospitalListState } from '/src/recoils/ParamedicAtoms';

function ParamedicMap() {

  const hospitalList = useRecoilValue(HospitalListState)
  const currPosition = useRecoilValue(currentPosition);
  const isTransferring = useRecoilValue(isTransferringState);
  const [paramedicMapProps, setparamedicMapProps] = useState<MapProps | undefined>(undefined);


  useEffect(() => {
    console.log("ㄴnewProps: MapPropsㄱ")
    if(currPosition.lat && currPosition.lon){
      if(!isTransferring){
        const newProps: MapProps = {
          type: "request",
          pos: { lat: currPosition.lat, lon: currPosition.lon },
          // hosList: hospitalList ? hospitalList : undefined,
        };
        console.log("request", newProps)
        setparamedicMapProps(newProps);
      }
      else{
        const newProps: MapProps = {
          type: "transfer",
          pos: { lat: currPosition.lat, lon: currPosition.lon },
          // hosList: hospitalList ? hospitalList : undefined,
        };
        console.log("transfer", newProps) 
        setparamedicMapProps(newProps);
      }
      
    }
    
  }, [isTransferring]);

  return (
    <S.Map>
      {paramedicMapProps !== undefined ? <Map {...paramedicMapProps}></Map> : <></>}
    </S.Map>
  );
}

export default ParamedicMap;