import { useState, useEffect } from 'react';
import { fixedCallingType } from '/src/types/paramedic';
import { finishTransfer, cancleTransfer } from '/src/apis/paramedic';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { occurrenceState, fixedCallingState, isCanceledState, isCompletedState } from '/src/recoils/ParamedicAtoms';
// import useResetParamedicRecoil from '../../RecoilReset/RecoilReset';
import * as S from './Move.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import VideoModal from '/src/components/Hospital/Main/HospitalMainSidebar/Transfer/TransferDetail/VideoModal';

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
  const [fixedCalling, setFixedCalling] = useRecoilState(fixedCallingState);
  // const resetParemdicRecoil = useResetParamedicRecoil();
  const setIsCanceledState = useSetRecoilState(isCanceledState);
  const setIsCompletedState = useSetRecoilState(isCompletedState);

  const [videoOpen, setVideoOpen] = useState(false);
  const closeModal = () => {
    setFixedCalling((prev: fixedCallingType) => ({ ...prev, videoOn: false }));
    setVideoOpen(false);
  };
  const completeTransfer = () => {
    finishTransfer(fixedCalling.transferId).then((success) => {
      if (success) {
        setIsCompletedState(true);
        // resetParemdicRecoil();
      }
    });
  };

  const endTransfer = () => {
    cancleTransfer(fixedCalling.transferId).then((success) => {
      if (success) {
        setIsCanceledState(true);
        // resetParemdicRecoil();
      }
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setFixedCalling((prev) => ({ ...prev, duration: prev.duration - 1 }));
    }, 60000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <>
      <S.HospitalList>
        <S.TotalInformation>
          <S.ItemCallTimeBig>{35}분 후 도착 예정</S.ItemCallTimeBig>
          <S.ItemTitle>
            {fixedCalling.name}
          </S.ItemTitle>

          <S.Calling>
            <A.BtnMediaRecord
              $height="4vh"
              $width="22vw"
              $fontSize="2vh"
              $padding="0 3vw"
              $margin="1vw"
              $color={theme.color.grayDarkest}
              $justifyContent="space-between"
              $border={`0.1vh solid ${theme.color.grayDarkest}`}
              $borderRadius="2vh"
              $boxShadow='0'
              onClick={() => {
                setFixedCalling((prev: fixedCallingType) => ({ ...prev, videoOn: true }));
                setVideoOpen(true);
              }}
            >
              <A.ImgRecordVideoBlack $width="3vh" />
              영상 통화
            </A.BtnMediaRecord>
            <A.BtnMediaRecord
              $height="4vh"
              $width="22vw"
              $fontSize="2vh"
              $padding="0 3.3vw"
              $margin="1vw"
              $color={theme.color.grayDarkest}
              $justifyContent="space-between"
              $border={`0.1vh solid ${theme.color.grayDarkest}`}
              $borderRadius="2vh"
              $boxShadow='0'
            >
              <A.ImgRecordVoiceBlack $width="1.8vh" />
              음성 통화
            </A.BtnMediaRecord>
          </S.Calling>

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

      <S.CancelOrConfirm>
        <A.BtnSubmit
          onClick={endTransfer}
          $width="50%"
          $height="6vh"
          $color={theme.color.fontPink1}
          $boxShadow="0 0.2px 0.1px 0px inset"
          $fontSize="2.5vh"
        >
          이송 취소
        </A.BtnSubmit>

        <A.BtnSubmit
          onClick={completeTransfer}
          $width="50%"
          $height="6vh"
          $backgroundColor={theme.color.fontPink1}
          $boxShadow="0 0.2px 0.1px 0px inset"
          $fontSize="2.5vh"
        >
          이송 완료
        </A.BtnSubmit>
      </S.CancelOrConfirm>
      {videoOpen && fixedCalling && fixedCalling.transferId && (
        <VideoModal
          position={'fixed'}
          top={'0%'}
          right={'0%'}
          width={'100%'}
          height={'100%'}
          transferId={fixedCalling.transferId}
          closeModal={closeModal}
        ></VideoModal>
      )}
    </>
  );
}

export default Move;
