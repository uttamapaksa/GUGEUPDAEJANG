import * as S from './WaitMove.style';
import M from '/src/components/Commons/Molecules';
import {  Map, Toggle, Times, Wait, Move } from '/src/components/Paramedic/WaitMove'

function WaitMove() {
  return (
    <S.Container>
      <S.Wrapper>
        <M.ParamedicHeader />
        <Map />
        <S.ContentBox>
          <Toggle />
          <Times />
          <Wait />
          <Move />
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default WaitMove;
