import * as S from './Login.style';

function Login() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          <S.Logo />
          <S.GoToGuest />
          <S.LoginInput />
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Login;
