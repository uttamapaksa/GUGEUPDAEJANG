import { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { showWaitState, CallHospitalState } from '/src/recoils/ParamedicAtoms';
import * as S from './WaitMove.style';
import M from '/src/components/Commons/Molecules';
import { ParamedicMap, Toggle, Times, Wait, Move } from '/src/components/Paramedic/WaitMove';
import { MapProps } from '/src/types/map';

function WaitMove() {
  const [mapProps, setMapProps] = useState<MapProps>();
  const showWait = useRecoilValue(showWaitState);
  const [hospitals, setHospitals] = useRecoilState(CallHospitalState);
 
  return (
    <S.Container>
      <S.Wrapper>
        <M.ParamedicHeader />
        <ParamedicMap mapProps={mapProps} setMapProps={setMapProps} />
        <S.ContentBox>
          <Toggle />
          <Times />
          {showWait ? <Wait hospitals={hospitals} setHospitals={setHospitals} /> : <Move />}
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default WaitMove;
