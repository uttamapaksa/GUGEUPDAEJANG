import * as S from './History.style';
import A from '/src/components/Commons/Atoms';

function History() {
  const goToPrev = () => {
    console.log(123)
  }

  return (
    <>
    <S.ParamedicHeader>
      <S.Arrow>
        <A.ImgArrowLeft $width="2vh" onClick={goToPrev} />
      </S.Arrow>
      <A.TxtHeaderTitle>이송 기록</A.TxtHeaderTitle>
      <S.Arrow>
      </S.Arrow>
    </S.ParamedicHeader>
    
    </>
  );
}

export default History;
