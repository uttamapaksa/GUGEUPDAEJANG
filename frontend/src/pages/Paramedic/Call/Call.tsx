import * as S from './Call.style';
import { ParamedicHeader, Ktas, Information, Status, Category } from '/src/components/Paramedic/Call';

function Call() {
  return (
    <S.Container>
      <S.ContentBox>
        <ParamedicHeader />
        <S.Blank />
        <Ktas />
        <S.Blank />
        <Information />
        <S.Blank />
        <Status />
        <S.Blank />
        <Category />
        <S.Blank />
      </S.ContentBox>
    </S.Container>
  );
}

export default Call;
