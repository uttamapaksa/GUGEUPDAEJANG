import { useRecoilState } from 'recoil';
import { currentParamedicPageIndexState } from '/src/recoils/ParamedicAtoms';
import * as S from './ParamedicHeader.style';
import A from '/src/components/Commons/Atoms';

function ParamedicHeader( {title}: {title: string} ) {
  const [currentPageIndex, setCurrentPageIndex] = useRecoilState(currentParamedicPageIndexState);
  const goToPrev = () => setCurrentPageIndex((prev) => prev - 1);
  const goToPost = () => setCurrentPageIndex((prev) => prev + 1);

  return (
    <S.ParamedicHeader>
      <S.Arrow>
        <A.ImgArrowLeft $width="2vh" onClick={goToPrev} />
      </S.Arrow>
      <A.TxtHeaderTitle>{title}</A.TxtHeaderTitle>
      <S.Arrow>
        {currentPageIndex === 1 && <A.ImgArrowRight $width="2vh" onClick={goToPost} />}
      </S.Arrow>
    </S.ParamedicHeader>
  );
}

export default ParamedicHeader;
