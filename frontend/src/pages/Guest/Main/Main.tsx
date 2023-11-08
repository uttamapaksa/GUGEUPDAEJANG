import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { HospitalListState } from '/src/recoils/ParamedicAtoms';
import * as S from './Main.style';
import M from '/src/components/Commons/Molecules';
import A from '/src/components/Commons/Atoms';
import GuestMap from '/src/components/Guest/Main/GuestMap/GuestMap';
import { MapProps } from '/src/types/map';
import Spinner from '/src/components/libraries/Spinner/Spinner';

function Main() {
  const [mapProps, setMapProps] = useState<MapProps>();
  const [hospitals, setHospitals] = useRecoilState(HospitalListState);

  return (
    <S.Container>
      <GuestMap mapProps={mapProps} setMapProps={setMapProps} />

      <S.ContentBox>
        <A.ImgBar $position="relative" $margin="2vh 0px 1vh 0px" $width="50px" $height="8px" />

        {hospitals.map((hospital, index) => (
          <M.HospitalItem key={index} hospital={hospital} setHospitals={setHospitals} />
        ))}

        <Spinner width="60px" height="60px" top="130px"></Spinner>

        <S.SearchBtn>주변 응급실 찾기</S.SearchBtn>
      </S.ContentBox>
    </S.Container>
  );
}

export default Main;
