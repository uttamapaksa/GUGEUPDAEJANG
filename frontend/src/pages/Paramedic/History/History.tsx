import { useState } from 'react';
import { currentParamedicPageIndexState } from '/src/recoils/ParamedicAtoms';
import { useSetRecoilState } from 'recoil';
import * as S from './History.style';
import A from '/src/components/Commons/Atoms';

function History() {
  const setCurrentPageIndex = useSetRecoilState(currentParamedicPageIndexState);
  const goToPrev = () => setCurrentPageIndex(0);
  const [showCenter, setShowCenter] = useState(true);

  return (
    <>
      <S.ParamedicHeader>
        <S.Arrow>
          <A.ImgArrowLeft $width="2vh" onClick={goToPrev} />
        </S.Arrow>
        <A.TxtHeaderTitle>이송 기록</A.TxtHeaderTitle>
        <S.Arrow />
      </S.ParamedicHeader>

      <S.HistoryCategory>
        <S.TxtHeaderTitle showcenter={showCenter ? 1 : 0} onClick={()=>setShowCenter(true)}>구급대원</S.TxtHeaderTitle>
        <S.TxtHeaderTitle showcenter={showCenter ? 0 : 1} onClick={()=>setShowCenter(false)}>안전센터</S.TxtHeaderTitle>
      </S.HistoryCategory>

      <S.Wrapper>
        <S.ContentBox>


        <S.SearchOption>
          Options
        </S.SearchOption>

        <S.SearchList>
          <S.SearchItem>
            <S.SearchItemRow>1</S.SearchItemRow>
            <S.SearchItemRow>1</S.SearchItemRow>
            <S.SearchItemRow>1</S.SearchItemRow>
            <S.SearchItemRow>1</S.SearchItemRow>
            <S.SearchItemRow>1</S.SearchItemRow>
            <S.SearchItemRow>1</S.SearchItemRow>
          </S.SearchItem>
          <S.SearchItem>
            Item
          </S.SearchItem>
          <S.SearchItem>
            Item
          </S.SearchItem>
          <S.SearchItem>
            Item
          </S.SearchItem>
        </S.SearchList>

        </S.ContentBox>
      </S.Wrapper>

    </>
  );
}

export default History;
