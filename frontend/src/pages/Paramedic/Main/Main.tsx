import { useEffect } from 'react';
import * as S from './Main.style';
import M from '/src/components/Commons/Molecules';
import { CallWaitToggle, GoToHistory } from '/src/components/Paramedic/Main';

function Main() {
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true });
    navigator.mediaDevices.getUserMedia({ video: true });
  },[])

  return (
    <S.Container>
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
