import * as S from './Call.style';

function Call() {
  return (
    <S.Container>
      <S.ContentBox>
        <S.ParamedicHeader>
          <S.Arrow />
          <S.TxtHeaderTitle>환자 등록</S.TxtHeaderTitle>
          <S.Arrow />
        </S.ParamedicHeader>

        <S.Blank />

        <S.Ktas>
          <S.TxtParamedicTitle>응급 분류</S.TxtParamedicTitle>
          <S.Col9>
            <S.BtnKtas></S.BtnKtas>
            <S.TxtKtas></S.TxtKtas>
          </S.Col9>
        </S.Ktas>

        <S.Blank />

        <S.Information>
          <S.TxtParamedicTitle>인적 정보</S.TxtParamedicTitle>
          <S.Col9>
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
          </S.Col9>
        </S.Information>

        <S.Blank />

        <S.Status>
          <S.TxtParamedicTitle>환자 상태</S.TxtParamedicTitle>
          <S.Col9>
            <S.BtnMediaRecord />
            <S.BtnMediaRecord />
            <S.TxtStatus />
          </S.Col9>
        </S.Status>

        <S.Blank />

        <S.Category>
          <S.TxtParamedicTitle>주요 분류</S.TxtParamedicTitle>
          <S.Col9>
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.BtnToggle />
            <S.IptTmp />
            <S.BtnTmp />
            <S.BtnSubmit>이송요청</S.BtnSubmit>
          </S.Col9>
        </S.Category>

        <S.Blank />
      </S.ContentBox>
    </S.Container>
  );
}

export default Call;
