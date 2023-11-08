import { useState } from 'react';
import { useSetRecoilState, useResetRecoilState, useRecoilState } from 'recoil';
import { currentParamedicPageIndexState, isTransportingState, occurrenceState, showWaitState, fixedCallingState } from '/src/recoils/ParamedicAtoms';
import * as S from './Move.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

function Move() {
  const resetCurrentPageIndex = useResetRecoilState(currentParamedicPageIndexState);
  const [categories, _] = useState<string[]>(['추락', '과다출혈', '과다출혈']);
  const setIsTransporting = useSetRecoilState(isTransportingState);
  const [occurrence, setOccurrence] = useRecoilState(occurrenceState)
  const resetOccurrence = useResetRecoilState(occurrenceState);
  const resetShowWait = useResetRecoilState(showWaitState);

  const finishTransfer = () => {
    setIsTransporting(false);
    resetShowWait();
    resetOccurrence();
    resetCurrentPageIndex();
  };

  return (
    <>
      <S.HospitalList>
        <S.TotalInformation>
          <S.ItemTitle>
            하나병원
            <S.ItemCallTimeBig>35분 후 도착 예정</S.ItemCallTimeBig>
          </S.ItemTitle>

          <S.Move1>인적 사항</S.Move1>
          <A.DivTag
            $margin="1vh"
            $width="18vh"
            $height="5.3vh"
            $fontSize="2.65vh"
            $color={theme.color.white}
            $boxShadow="0 0 2vh 0.4vh rgba(0, 0, 0, 0.2)"
            $backgroundColor={theme.color.grayDarkest}
            $borderRadius="1vh"
          >
            청소년 (여)
          </A.DivTag>
          <S.Move1>주요 분류</S.Move1>
          {categories.map((val, idx) => (
            <A.DivTag
              key={idx}
              $margin="1vh"
              $padding="0 1.5vh"
              $width="auto"
              $height="4.5vh"
              $fontSize="2.2vh"
              $boxShadow="0 0 1vh 0.2vh rgba(0, 0, 0, 0.2)"
              $borderRadius="1vh"
            >
              {val}
            </A.DivTag>
          ))}
          <S.Move1>환자 상태</S.Move1>
          <S.Move2>지금 대교 사고 10대 여성 머리 출혈 환자 발생하였습니다. 심정지 이력이 있는 환자입니다.</S.Move2>
        </S.TotalInformation>
      </S.HospitalList>

      <S.Calling>
        <A.BtnMediaRecord
          $width="25vh"
          $height="7vh"
          $fontSize="2.3vh"
          $color={theme.color.grayDarkest}
          $border={`0.25vh solid ${theme.color.grayDarkest}`}
          $borderRadius="2vh"
        >
          <A.ImgRecordVideoBlack $width="4vh" />
          영상 통화
          <A.ImgArrowBlackRight $width="1.2vh" />
        </A.BtnMediaRecord>
        <A.BtnMediaRecord
          $width="25vh"
          $height="7vh"
          $fontSize="2.3vh"
          $color={theme.color.grayDarkest}
          $border={`0.25vh solid ${theme.color.grayDarkest}`}
          $borderRadius="2vh"
        >
          <A.ImgRecordVoiceBlack $width="2.4vh" />
          음성 통화
          <A.ImgArrowBlackRight $width="1.2vh" />
        </A.BtnMediaRecord>
      </S.Calling>

      <A.BtnSubmit
        onClick={finishTransfer}
        $margin="10vh 0 1vh 0 "
        $borderRadius="1vh"
        $width="90%"
        $height="6vh"
        $backgroundColor={theme.color.fontPink1}
        $fontSize="2.5vh"
      >
        이송 완료
      </A.BtnSubmit>
    </>
  );
}

export default Move;
