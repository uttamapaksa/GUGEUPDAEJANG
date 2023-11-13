import { useEffect } from 'react';
import * as S from './Main.style';
import M from '/src/components/Commons/Molecules';
import GoToHistory from '/src/components/Paramedic/Main/GoToHistory/GoToHistory';
import CallWaitToggle from '/src/components/Paramedic/Main/CallWaitToggle/CallWaitToggle';

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
