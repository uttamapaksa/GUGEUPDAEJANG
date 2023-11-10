import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isTransferringState } from '/src/recoils/ParamedicAtoms';
import * as S from './WaitMove.style';
import M from '/src/components/Commons/Molecules';
import { ParamedicMap, Toggle, Times, Wait, Move } from '/src/components/Paramedic/WaitMove';

function WaitMove() {
  const isTransferring = useRecoilValue(isTransferringState);

  return (
    <S.Container>
      <S.Wrapper>
        <M.ParamedicHeader />
        <ParamedicMap />
        <S.ContentBox>
          <Toggle />
          <Times />
          {!isTransferring ? <Wait /> : <Move />}
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default WaitMove;
