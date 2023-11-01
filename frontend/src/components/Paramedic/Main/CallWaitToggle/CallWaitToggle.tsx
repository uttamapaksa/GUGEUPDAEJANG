import { useState } from 'react';
import * as S from './CallWaitToggle.style';
import A from '/src/components/Commons/Atoms';

function CallWaitToggle() {
  const [selected, setSelected] = useState(0);
  const isSelected = (num: number) => {
    if (selected === num)
    return true;
    return false; 
  }
  const clickButton = (num: number) => {
    if (selected === num) 
    return setSelected(0);
    return setSelected(num);
  }

  return (
    <S.Container>
      <A.BtnParaState onClick={()=>clickButton(1)} $IsClick={isSelected(1)}>
        <S.TxtParaState1 isClick={isSelected(1)}>환자 이송</S.TxtParaState1>
        <S.TxtParaState1 isClick={isSelected(1)}>요청하기</S.TxtParaState1>
        <S.ImgDiv>
          {selected === 1 
          ? <A.ImgAmbulanceActive $width="4vh" /> 
          : <A.ImgAmbulance $width="4vh" />}
        </S.ImgDiv>
      </A.BtnParaState>

      <A.BtnParaState onClick={() => clickButton(2)} $IsClick={isSelected(2)}>
        {selected === 2
        ? <>
            <S.TxtParaState1>하나병원</S.TxtParaState1>
            <S.TxtParaState2>이송중</S.TxtParaState2>
            <S.Blank/>
            <S.Row1>
              <S.TxtParaState3>청년 여성</S.TxtParaState3>
              <S.TxtParaState4>환자</S.TxtParaState4>
            </S.Row1>
            <S.Row1>
              <S.TxtParaState3>34분</S.TxtParaState3>
              <S.TxtParaState4>후 도착 예정</S.TxtParaState4>
            </S.Row1>
          </>
        : <S.TxtParaState1 isClick={isSelected(2)}>이송 정보</S.TxtParaState1>
        }

        <S.ImgDiv>
          {selected === 2 
          ? <A.ImgRequestBellActive $width="3.5vh" /> 
          : <A.ImgRequestBell $width="3.5vh" />}
        </S.ImgDiv>
      </A.BtnParaState>
    </S.Container>
  );
}

export default CallWaitToggle;
