import { useState } from 'react';
import { currentParamedicPageIndexState, historyDetailState } from '/src/recoils/ParamedicAtoms';
import { useRecoilState, useSetRecoilState } from 'recoil';
import * as S from './History.style';
import A from '/src/components/Commons/Atoms';
import ParaHistoryCard from '/src/components/Paramedic/History/ParaHIstoryCard/ParaHIstoryCard';
import ParaHistoryOption from '/src/components/Paramedic/History/ParaHistoryOption/ParaHistoryOption';
import ParaHistoryDetail from '/src/components/Paramedic/History/ParaHistoryDetail/ParaHistoryDetail';

function History() {
  const setCurrentPageIndex = useSetRecoilState(currentParamedicPageIndexState);
  const [showCenter, setShowCenter] = useState(false);
  const [historyDetail, setHistoryDetail] = useRecoilState(historyDetailState)

  const goToPrev = () => {
    if (historyDetail) {
      setCurrentPageIndex(3)
      setHistoryDetail(null)
      return
    }
    setCurrentPageIndex(0);
  }

  return (
    <>
      <S.ParamedicHeader>
        <S.Arrow>
          <A.ImgArrowLeft $width="1.5vh" onClick={goToPrev} />
        </S.Arrow>
        <A.TxtHeaderTitle $width="18%">이송기록</A.TxtHeaderTitle>
      </S.ParamedicHeader>

      {historyDetail ? (
        <ParaHistoryDetail/>
      ) : (
        <>
          <S.HistoryCategory>
            <S.TxtHeaderTitle showcenter={showCenter ? 0 : 1} onClick={() => setShowCenter(false)}>
              안전센터
            </S.TxtHeaderTitle>
            <S.TxtHeaderTitle showcenter={showCenter ? 1 : 0} onClick={() => setShowCenter(true)}>
              구급대원
            </S.TxtHeaderTitle>
          </S.HistoryCategory>

          <S.Wrapper>
            <ParaHistoryOption showCenter={showCenter} />
            <S.ContentBox>
              <ParaHistoryCard showCenter={showCenter} />
            </S.ContentBox>
          </S.Wrapper>
        </>
      )}
    </>
  );
}

export default History;
