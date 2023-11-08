import { useRecoilValue, useResetRecoilState } from 'recoil';
import {
  currentParamedicPageIndexState,
  isTransferringState,
  occurrenceState,
  callingStepState,
  showWaitState,
  fixedCallingState,
  transferHospitalIdState,
} from '/src/recoils/ParamedicAtoms';
import * as S from './Move.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import { finishTransfer } from '/src/apis/paramedic';

interface GroupMapping {
  [key: string]: string;
}
const ageGroupMapping: GroupMapping = {
  INFANT: '영유아',
  CHILD: '아동',
  ADOLESCENT: '청소년',
  YOUTH: '청년',
  MIDDLE: '중장년',
  SENIOR: '노인',
};
const genderMapping: GroupMapping = {
  MALE: '남',
  FEMALE: '여',
};

function Move() {
  const occurrence = useRecoilValue(occurrenceState);
  const fixedCalling = useRecoilValue(fixedCallingState);

  const resetStep = useResetRecoilState(callingStepState);
  const resetShowWait = useResetRecoilState(showWaitState);
  const resetOccurrence = useResetRecoilState(occurrenceState);
  const resetTransferring = useResetRecoilState(isTransferringState);
  const resetFixedCalling = useResetRecoilState(fixedCallingState);
  const resetCurrentPageIndex = useResetRecoilState(currentParamedicPageIndexState);
  const resetTransferHospitalId = useResetRecoilState(transferHospitalIdState);

  const completeTransfer = () => {
    finishTransfer(fixedCalling.transferId).then((success) => {
      if (success) {
        resetStep();
        resetShowWait();
        resetOccurrence();
        resetFixedCalling();
        resetTransferring();
        resetCurrentPageIndex();
        resetTransferHospitalId();
      }
    });
  };

  return (
    <>
      <S.HospitalList>
        <S.TotalInformation>
          <S.ItemTitle>
            {fixedCalling.name}
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
            {`${ageGroupMapping[fixedCalling.ageGroup]} (${genderMapping[fixedCalling.gender]})`}
          </A.DivTag>
          <S.Move1>주요 분류</S.Move1>
          {occurrence.tags.map((tag) => (
            <A.DivTag
              key={tag.id}
              $margin="1vh"
              $padding="0 1.5vh"
              $width="auto"
              $height="4.5vh"
              $fontSize="2.2vh"
              $boxShadow="0 0 1vh 0.2vh rgba(0, 0, 0, 0.2)"
              $borderRadius="1vh"
            >
              {tag.name}
            </A.DivTag>
          ))}
          <S.Move1>환자 상태</S.Move1>
          <S.Move2>{fixedCalling.description}</S.Move2>
        </S.TotalInformation>
      </S.HospitalList>

      <S.Calling>
        <A.BtnMediaRecord
          $width="47%"
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
          $width="47%"
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

      <S.CancelOrConfirm>
        <A.BtnSubmit
          onClick={completeTransfer}
          $borderRadius="1vh"
          $width="47%"
          $height="6vh"
          $border={`0.2vh solid ${theme.color.fontPink1}`}
          $color={theme.color.fontPink1}
          $fontSize="2.5vh"
        >
          이송 취소
        </A.BtnSubmit>

        <A.BtnSubmit
          onClick={completeTransfer}
          $borderRadius="1vh"
          $width="47%"
          $height="6vh"
          $border={`0.2vh solid ${theme.color.fontPink1}`}
          $backgroundColor={theme.color.fontPink1}
          $fontSize="2.5vh"
        >
          이송 완료
        </A.BtnSubmit>
      </S.CancelOrConfirm>
    </>
  );
}

export default Move;
