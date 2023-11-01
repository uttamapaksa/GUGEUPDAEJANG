import { useState } from 'react';
import * as S from './Status.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

function Status() {
  const [content, setContent] = useState<string>(
    '지금 대교 사고 10대 여성 머리 출혈 환자 발생하였습니다. 심정지 이력이 있는 환자입니다.',
  );

  return (
    <S.Status>
      <A.TxtParamedicTitle>환자 상태</A.TxtParamedicTitle>
      <S.Col9>
        <A.BtnMediaRecord
          $padding="0 1.5vh"
          $width="45%"
          $height="6.6vh"
          $color={theme.color.pinkLight}
          $border={`0.3vh solid ${theme.color.pinkLight}`}
          $borderRadius="1.8vh"
          $boxShadow='0 0 1vh 0.4vh rgba(0, 0, 0, 0.10)'
          $fontSize="2.2vh"
        >
          <A.ImgRecordVideoPink $width="3.2vh" />
          영상 촬영
          <A.ImgArrowPinkRight $width="1vh" />
        </A.BtnMediaRecord>
        <A.BtnMediaRecord
          $padding="0 1vh"
          $width="45%"
          $height="6.6vh"
          $color={theme.color.pinkLight}
          $border={`0.3vh solid ${theme.color.pinkLight}`}
          $borderRadius="1.8vh"
          $boxShadow='0 0 1vh 0.4vh rgba(0, 0, 0, 0.10)'
          $fontSize="2.2vh"
        >
          <A.ImgRecordVoicePink $width="2.2vh" />
          음성 녹음
          <A.ImgArrowPinkRight $width="1vh" />
        </A.BtnMediaRecord>
        <S.TxtStatus
          onChange={(e) => setContent(e.target.value)}
          value={content} />
      </S.Col9>
    </S.Status>
  );
}

export default Status;
