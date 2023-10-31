import * as S from './Main.style';
import M from '/src/components/Commons/Molecules';
import CallWaitToggle from '/src/components/Paramedic/Main/CallWaitToggle/CallWaitToggle';
import GoToHistory from '/src/components/Paramedic/Main/GoToHistory/GoToHistory';

function Main() {

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          <M.Logo/>
          <S.Blank />
          <CallWaitToggle />
          <GoToHistory />
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Main;
