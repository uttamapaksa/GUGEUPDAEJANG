import * as S from './Main.style';

function Main() {
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

export default Main;
