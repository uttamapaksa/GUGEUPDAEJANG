import { useState } from 'react';
import * as S from './WaitMove.style';
import M from '/src/components/Commons/Molecules';
import { ParamedicMap, Toggle, Times, Wait, Move } from '/src/components/Paramedic/WaitMove';
import { MapProps } from "/src/types/map";
import { CallHospitalType } from '/src/types/paramedic';

function WaitMove() {
  const [mapProps, setMapProps] = useState<MapProps>();
  const [showWait, setShowWait] = useState(true);
  const hospitals: CallHospitalType[] = [
    {
        "id": 1488,
        "hospitalId": "E2400032",
        "name": "청양군 보건의료원",
        "address": "충청남도 청양군 청양읍 칠갑산로7길 54",
        "telephone1": "041-940-4515",
        "telephone2": "041-940-4951",
        "latitude": 36.45529646339589,
        "longitude": 126.80455836964052,
        "bedCount": 6,
        "distance": 11.843,
        "time": 19
    },
    {
        "id": 1488,
        "hospitalId": "E2400032",
        "name": "유성구 싸피 병원",
        "address": "충청남도 청양군 청양읍 칠갑산로7길 54",
        "telephone1": "041-940-4515",
        "telephone2": "041-940-4951",
        "latitude": 36.45529646339589,
        "longitude": 126.80455836964052,
        "bedCount": 6,
        "distance": 11.843,
        "time": 19
    },
    {
        "id": 1488,
        "hospitalId": "E2400032",
        "name": "연세대학교 세브란스 병원",
        "address": "충청남도 청양군 청양읍 칠갑산로7길 54",
        "telephone1": "041-940-4515",
        "telephone2": "041-940-4951",
        "latitude": 36.45529646339589,
        "longitude": 126.80455836964052,
        "bedCount": 6,
        "distance": 11.843,
        "time": 19
    },
]

  return (
    <S.Container>
      <S.Wrapper>
        <M.ParamedicHeader />
        <ParamedicMap 
         mapProps={mapProps} 
         setMapProps={setMapProps}
         />
        <S.ContentBox>
          <Toggle />
          <Times />
          {showWait ? 
          <Wait hospitals={hospitals}/> 
          : <Move />}
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default WaitMove;
