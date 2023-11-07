import { useEffect } from 'react';
import * as S from './Main.style';
import M from '/src/components/Commons/Molecules';
import { CallWaitToggle, GoToHistory } from '/src/components/Paramedic/Main';
import Geolocation from '/src/components/libraries/Geolocation/Geolocation';

function Main() {
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true });
    navigator.mediaDevices.getUserMedia({ video: true });
  },[])

  return (
    <S.Container>
      <Geolocation />
      <S.Wrapper>
        <S.ContentBox>
          <M.Logo />
          <S.Blank />
          <CallWaitToggle />
          <GoToHistory />
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Main;
