import * as S from './Call.style';

function Call() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          
          <S.Logo>
            <S.ImgLogo />
          </S.Logo>

          <S.Blank />

          <S.CallWaitToggle>
            <S.BtnParaState />
            <S.BtnParaState />
          </S.CallWaitToggle>

          <S.GoToHistory>

          </S.GoToHistory>

          <S.Blank />
          <S.Blank />
          
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Call;
