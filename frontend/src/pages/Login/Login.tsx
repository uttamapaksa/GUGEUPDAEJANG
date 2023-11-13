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
    if (curPos) {setIsOpen(false)}
  },[curPos])

  return (
    <S.Container>
      {isOpen && <LoginFailModal content={"내 위치를 받아오는 중입니다..."} setIsOpen={setIsOpen} />}
      <Geolocation/>
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
