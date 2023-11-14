import { useState } from 'react';
import { currentParamedicPageIndexState } from '/src/recoils/ParamedicAtoms';
import { useSetRecoilState } from 'recoil';
import * as S from './History.style';
import A from '/src/components/Commons/Atoms';
import ParaHistoryCard from '/src/components/Paramedic/History/ParaHIstoryCard/ParaHIstoryCard';
import ParaHistoryOption from '/src/components/Paramedic/History/ParaHistoryOption/ParaHistoryOption';

function History() {
  const setCurrentPageIndex = useSetRecoilState(currentParamedicPageIndexState);
  const goToPrev = () => setCurrentPageIndex(0);
  const [showCenter, setShowCenter] = useState(true);

  return (
    <>
      <S.ParamedicHeader>
        <S.Arrow>
          <A.ImgArrowLeft $width="1.5vh" onClick={goToPrev} />
        </S.Arrow>
        <A.TxtHeaderTitle>이송 기록</A.TxtHeaderTitle>
        <S.Arrow />
      </S.ParamedicHeader>

      <S.HistoryCategory>
        <S.TxtHeaderTitle showcenter={showCenter ? 1 : 0} onClick={() => setShowCenter(true)}>
          구급대원
        </S.TxtHeaderTitle>
        <S.TxtHeaderTitle showcenter={showCenter ? 0 : 1} onClick={() => setShowCenter(false)}>
          안전센터
        </S.TxtHeaderTitle>
      </S.HistoryCategory>

      <S.Wrapper>
        <ParaHistoryOption showCenter={showCenter} />
        <S.ContentBox>
          <ParaHistoryCard showCenter={showCenter} />
        </S.ContentBox>
      </S.Wrapper>
    </>
  );
}

export default History;
