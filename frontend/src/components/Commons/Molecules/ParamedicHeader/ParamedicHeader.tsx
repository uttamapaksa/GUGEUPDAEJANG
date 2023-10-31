import * as S from './ParamedicHeader.style';
import A from '/src/components/Commons/Atoms';

function ParamedicHeader() {
  return (
    <S.ParamedicHeader>
      <S.Arrow>
        <A.ImgArrowLeft $width='2vh'/>
      </S.Arrow>
      <A.TxtHeaderTitle>환자 등록</A.TxtHeaderTitle>
      <S.Arrow>
        <A.ImgArrowRight $width='2vh'/>
      </S.Arrow>
    </S.ParamedicHeader>
  );
}

export default ParamedicHeader;
