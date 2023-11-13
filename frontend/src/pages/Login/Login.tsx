import { useEffect, useState } from 'react';
import * as S from './Login.style';
import M from '/src/components/Commons/Molecules';

import GoToGuest from '/src/components/Login/GoToGuest/GoToGuest';
import LoginInput from '/src/components/Login/LoginInput/LoginInput';
import Geolocation from '/src/components/libraries/Geolocation/Geolocation';

import LoginFailModal from '/src/components/Commons/Molecules/LoginFailModal/LoginFailModal';
import { currentPosition } from '/src/recoils/HospitalAtoms';
import { useRecoilValue } from 'recoil';

function Login() {
  const [isOpen, setIsOpen] = useState(true);
  const curPos = useRecoilValue(currentPosition);

  useEffect(()=>{
    // GPS 권한 접근
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => {}, () => {})} 

    if (curPos.lat !== null) { setIsOpen(false) }
  },[curPos])

  return (
    <S.Container>
      <Geolocation/>
      {isOpen && <LoginFailModal content={"내 위치를 받아오는 중입니다..."} setIsOpen={setIsOpen} />}
      <S.Wrapper>
        <S.ContentBox>
          <M.Logo/>
          <GoToGuest/>
          <LoginInput/>          
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Login;
