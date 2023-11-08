import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { HospitalListState } from '/src/recoils/ParamedicAtoms';
import * as S from './Main.style';
import M from '/src/components/Commons/Molecules';
import A from '/src/components/Commons/Atoms';
import GuestMap from '/src/components/Guest/Main/GuestMap/GuestMap';
import { MapProps } from '/src/types/map';
import Spinner from '/src/components/libraries/Spinner/Spinner';

const dummyHospitals = [
  {
    hospitalName: "연세대학교의과대학강남세브란스병원",
    distance: 5.5,
    telephone: "02-1234-5678",
    duration: 8,
    bedCount: 10,
    callingTime: "2023-11-08T14:20:00Z",
    id: 2,
    status: "PENDING",
  },
  {
    hospitalName: "연세대학교의과대학강남세브란스병원",
    distance: 7.2,
    telephone: "02-8765-4321",
    duration: 12,
    bedCount: 5,
    callingTime: "2023-11-08T15:45:00Z",
    id: 3,
    status: "REJECTED",
  },
  {
    hospitalName: "연세대학교의과대학강남세브란스병원",
    distance: 9.8,
    telephone: "02-5566-7788",
    duration: 15,
    bedCount: 8,
    callingTime: "2023-11-08T16:30:00Z",
    id: 4,
    status: "APPROVED",
  },
  {
    hospitalName: "연세대학교의과대학강남세브란스병원",
    distance: 9.8,
    telephone: "02-5566-7788",
    duration: 15,
    bedCount: 8,
    callingTime: "2023-11-08T16:30:00Z",
    id: 4,
    status: "APPROVED",
  },
  {
    hospitalName: "연세대학교의과대학강남세브란스병원",
    distance: 9.8,
    telephone: "02-5566-7788",
    duration: 15,
    bedCount: 8,
    callingTime: "2023-11-08T16:30:00Z",
    id: 4,
    status: "APPROVED",
  },  
  {
    hospitalName: "연세대학교의과대학강남세브란스병원",
    distance: 9.8,
    telephone: "02-5566-7788",
    duration: 15,
    bedCount: 8,
    callingTime: "2023-11-08T16:30:00Z",
    id: 4,
    status: "APPROVED",
  }
];

function Main() {
  const [mapProps, setMapProps] = useState<MapProps>();
  const [searching, setSearching] = useState<boolean>(false)
  const [hospitals, setHospitals] = useRecoilState(HospitalListState);

  const searchToggle = () => {
    setSearching(!searching)
  }

  useEffect(()=>{
    setHospitals(dummyHospitals)
  },[])

  return (
    <S.Container>
      <GuestMap mapProps={mapProps} setMapProps={setMapProps} />

      <S.ContentBox>
        <S.ImageBox>
          <A.ImgBar 
            $margin="2vh 0px 1vh 0px" 
            $width="50px" 
            $height="8px" />
        </S.ImageBox>
        
        {hospitals.map((hospital, index) => (
          <M.HospitalItem key={index} hospital={hospital} setHospitals={setHospitals}/>))}
        
        {searching ? (
          <Spinner width="60px" height="60px" top="70vh"></Spinner>
        ):(<></>)}

        {searching ? (
        <S.SearchBtn
          onClick={()=>{searchToggle()}}>검색중지</S.SearchBtn>) : (
        <S.SearchBtn
          onClick={()=>{searchToggle()}}>주변 응급실 찾기</S.SearchBtn>)}

      </S.ContentBox>
    </S.Container>
  );
}

export default Main;
