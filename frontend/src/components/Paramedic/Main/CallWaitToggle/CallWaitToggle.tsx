import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { showWaitState } from '/src/recoils/ParamedicAtoms';
import * as S from './CallWaitToggle.style';
import A from '/src/components/Commons/Atoms';
import PATH from '/src/constants/path';

function CallWaitToggle() {
  const showwait = !useRecoilValue(showWaitState);
  const [selected, setSelected] = useState(0);
  const isSelected = (num: number) => {
    if (selected === num) return true;
    return false;
  };
  const navigate = useNavigate();
  const goToCall = () => {
    if (showwait) return;
    setSelected(1);
    setTimeout(() => {
      navigate(PATH.ParamedicCall);
    }, 200);
  };
  const goTMove = () => {
    if (!showwait) return;
    navigate(PATH.ParamedicWaitMove);
  };

  return (
    <S.Container>
      <A.BtnParaState onClick={goToCall} $IsClick={isSelected(1)}>
        <S.TxtParaState1 showwait={showwait ? 1: 0} selected={selected}>
          환자 이송
        </S.TxtParaState1>
        <S.TxtParaState1 showwait={showwait ? 1: 0} selected={selected}>
          요청하기
        </S.TxtParaState1>
        <S.ImgDiv>{showwait ? <A.ImgAmbulance $width="4vh" /> : <A.ImgAmbulanceActive $width="4vh" />}</S.ImgDiv>
      </A.BtnParaState>

      <A.BtnParaState onClick={goTMove} $IsClick={showwait}>
        {showwait ? (
          <>
            <S.TxtParaState5 showwait={showwait ? 1: 0}>하나병원</S.TxtParaState5>
            <S.TxtParaState2>이송중</S.TxtParaState2>
            <S.Blank />
            <S.Row1>
              <S.TxtParaState3>청년 여성</S.TxtParaState3>
              <S.TxtParaState4>환자</S.TxtParaState4>
            </S.Row1>
            <S.Row1>
              <S.TxtParaState3>34분</S.TxtParaState3>
              <S.TxtParaState4>후 도착 예정</S.TxtParaState4>
            </S.Row1>
          </>
        ) : (
          <S.TxtParaState5 showwait={showwait ? 1: 0}>이송 정보</S.TxtParaState5>
        )}

        <S.ImgDiv>
          {showwait ? <A.ImgRequestBellActive $width="3.5vh" /> : <A.ImgRequestBell $width="3.5vh" />}
        </S.ImgDiv>
      </A.BtnParaState>
    </S.Container>
  );
}

export default CallWaitToggle;
