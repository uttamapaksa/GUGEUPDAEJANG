import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentParamedicPageIndexState, isTransferringState, fixedCallingState } from '/src/recoils/ParamedicAtoms';
import * as S from './CallWaitToggle.style';
import A from '/src/components/Commons/Atoms';

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

function CallWaitToggle() {
  const setCurrentPageIndex = useSetRecoilState(currentParamedicPageIndexState);
  const isTransferring = useRecoilValue(isTransferringState);
  const fixedCalling = useRecoilValue(fixedCallingState);

  const [selected, setSelected] = useState(0);
  const isSelected = (num: number) => {
    if (selected === num) return true;
    return false;
  };
  const goToCall = () => {
    if (isTransferring) return;
    setSelected(1);
    setTimeout(() => {
      setCurrentPageIndex(1);
    }, 200);
  };
  const goTMove = () => {
    if (!isTransferring) return;
    setCurrentPageIndex(2);
  };

  return (
    <S.Container>
      <A.BtnParaState onClick={goToCall} $IsClick={isSelected(1)}>
        <S.TxtParaState1 isTransferring={isTransferring ? 1 : 0} selected={selected}>
          환자 이송
        </S.TxtParaState1>
        <S.TxtParaState1 isTransferring={isTransferring ? 1 : 0} selected={selected}>
          요청하기
        </S.TxtParaState1>
        <S.ImgDiv>{isTransferring ? <A.ImgAmbulance $width="4vh" /> : <A.ImgAmbulanceActive $width="4vh" />}</S.ImgDiv>
      </A.BtnParaState>

      <A.BtnParaState onClick={goTMove} $IsClick={isTransferring}>
        {isTransferring ? (
          <>
            <S.TxtParaState5 isTransferring={isTransferring ? 1 : 0}>{fixedCalling.name}</S.TxtParaState5>
            <S.TxtParaState2>이송중</S.TxtParaState2>
            <S.Blank />
            <S.Row1>
              <S.TxtParaState3>{ageGroupMapping[fixedCalling.ageGroup]} {genderMapping[fixedCalling.gender]}</S.TxtParaState3>
              <S.TxtParaState4>환자</S.TxtParaState4>
            </S.Row1>
            <S.Row1>
              <S.TxtParaState3>34분</S.TxtParaState3>
              <S.TxtParaState4>후 도착 예정</S.TxtParaState4>
            </S.Row1>
          </>
        ) : (
          <S.TxtParaState5 isTransferring={isTransferring ? 1 : 0}>이송 정보</S.TxtParaState5>
        )}

        <S.ImgDiv>
          {isTransferring ? <A.ImgRequestBellActive $width="3.5vh" /> : <A.ImgRequestBell $width="3.5vh" />}
        </S.ImgDiv>
      </A.BtnParaState>
    </S.Container>
  );
}

export default CallWaitToggle;
