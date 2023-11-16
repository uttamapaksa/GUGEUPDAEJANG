import { useRecoilValue } from 'recoil';
import { isTransferringState, occurrenceState } from '/src/recoils/ParamedicAtoms';
import * as S from './WaitMove.style';
import M from '/src/components/Commons/Molecules';
import Wait from '/src/components/Paramedic/WaitMove/Wait/Wait';
import Move from '/src/components/Paramedic/WaitMove/Move/Move';
import Times from '/src/components/Paramedic/WaitMove/Times/Times';
// import Toggle from '/src/components/Paramedic/WaitMove/Toggle/Toggle';
import ParamedicMap from '/src/components/Paramedic/WaitMove/Map/ParamedicMap';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

function WaitMove() {
  const isTransferring = useRecoilValue(isTransferringState);
  const occurState = useRecoilValue(occurrenceState);

  return (
    <S.Container>
      <S.Wrapper>
        <M.ParamedicHeader title={!isTransferringState ? '이송 요청' : '이송 중'} />
        <ParamedicMap />
        <S.ContentBox>
          {/* <Toggle /> */}
          {!isTransferring ?
            <>
              <Times />
              <S.WaitMoveScroll>
                <Wait />
              </S.WaitMoveScroll>
            </> :
            <>
              <A.DivKtasInfo
                $position="absolute"
                $right="0%"
                $top="0%"
                $ktas={occurState.ktas.toLowerCase() as "ktas1" | "ktas2" | "ktas3" | "ktas4" | "ktas5" | undefined}
                $width="50px"
                $height="25px"
                $borderRadius="0px 0px 0px 10px"
                $fontSize={theme.font.Small5_12}
              >
                {occurState.ktas}
              </A.DivKtasInfo>
              <S.WaitMoveScroll>
                <Move />
              </S.WaitMoveScroll>
            </>

          }

        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default WaitMove;
