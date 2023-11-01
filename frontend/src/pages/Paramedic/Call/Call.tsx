import * as S from './Call.style';
import M from '/src/components/Commons/Molecules';
import { Ktas, Information, Status, Category } from '/src/components/Paramedic/Call';

function Call() {
  return (
    <S.Container>
      <S.ContentBox>
        <M.ParamedicHeader />
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
