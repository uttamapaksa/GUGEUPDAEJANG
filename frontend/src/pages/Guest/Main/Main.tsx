import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './Main.style';
import M from '/src/components/Commons/Molecules';
import A from '/src/components/Commons/Atoms';
import GuestMap from '/src/components/Guest/Main/GuestMap/GuestMap';
import { MapProps } from '/src/types/map';
import Spinner from '/src/components/libraries/Spinner/Spinner';
import { CheckHospitalProps } from '/src/types/guest';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import { getCheckHospital } from '/src/apis/guest';
import { GuestHospitalListState } from '/src/recoils/GuestAtoms';
import { ImgArrowLeft } from '/src/components/Commons/Atoms/Image';
import { useNavigate } from 'react-router-dom';
import PATH from '/src/constants/path';

function Main() {
  const [mapProps, setMapProps] = useState<MapProps>();
  const [searching, setSearching] = useState<boolean>(false)
  const [guestHospitals, setGuestHospitals] = useRecoilState(GuestHospitalListState);
  const currPosition = useRecoilValue(currentPosition)

  const navigate = useNavigate()
  const goLogin = () => {navigate(`${PATH.Login}`)} 

  const searchToggle = () => {
    setSearching(!searching)
  }

  const axiosCheckHospital = async ():Promise<void> => {
    const info: CheckHospitalProps = {
      latitude : currPosition.lat,
      longitude : currPosition.lon,
      distance  : 10.00,
    };
    try{
      setGuestHospitals([])
      const response = await getCheckHospital(info)
      setGuestHospitals(response)
      if (response) { setSearching(false) }
    } 
    catch(error){
      console.log(error)
    }
  }

  return (
    <S.Container>
e     <GuestMap mapProps={mapProps} setMapProps={setMapProps} />
      <S.Header>
        <ImgArrowLeft 
          $width='1vh'
          $height='2vh'
          onClick={goLogin}/>
        사용자 페이지
        <S.Empty/>
      </S.Header>

      <S.ContentBox>
        <S.ImageBox>
          <A.ImgBar 
            $margin="2vh 0px 1vh 0px" 
            $width="50px" 
            $height="8px" />
        </S.ImageBox>
        
        {guestHospitals.map((guestHospital, index) => (
          <M.HospitalItem 
            key={index}
            IsGuest={true} 
            guestHospital={guestHospital}/>))}
        
        {searching ? (
          <Spinner width="10vh" height="10vh" top="70vh"></Spinner>
        ):(<></>)}
      </S.ContentBox>

      {searching ? (
        <S.SearchBtn
          onClick={()=>{
            searchToggle()}}>검색중지</S.SearchBtn>) : (
        <S.SearchBtn
          onClick={()=>{
            axiosCheckHospital()
            searchToggle()}}>주변 응급실 찾기</S.SearchBtn>)}
    </S.Container>
  );
}

export default Main;
