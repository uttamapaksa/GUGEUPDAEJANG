import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isTransferringState } from '/src/recoils/ParamedicAtoms';
import * as S from './WaitMove.style';
import M from '/src/components/Commons/Molecules';
import Wait from '/src/components/Paramedic/WaitMove/Wait/Wait';
import Move from '/src/components/Paramedic/WaitMove/Move/Move';
import Times from '/src/components/Paramedic/WaitMove/Times/Times';
import Toggle from '/src/components/Paramedic/WaitMove/Toggle/Toggle';
import ParamedicMap from '/src/components/Paramedic/WaitMove/Map/ParamedicMap';

function WaitMove() {
  const isTransferring = useRecoilValue(isTransferringState);

  return (
    <S.Container>
      <S.Wrapper>
        <M.ParamedicHeader title={!isTransferringState ? '이송 요청' : '이송 중'}/>
        <ParamedicMap />
        <S.ContentBox>
          <Toggle />
          <Times />
          <S.WaitMoveScroll>
            {!isTransferring ? <Wait /> : <Move />}
          </S.WaitMoveScroll>
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default WaitMove;
