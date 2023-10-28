import * as S from './Login.style';

function Login() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>

          <S.Logo>
            <S.ImgLogo />
          </S.Logo>

          <S.GoToGuest>
            <S.BtnGoToGuest />
          </S.GoToGuest>

          <S.LoginInput>
            <S.Row1>
              <S.IptUserInfo />
            </S.Row1>
            <S.Row1>
              <S.IptUserInfo />
              <S.BtnSubmit />
            </S.Row1>
            <S.Row2>
              <S.LoginToggle>회원가입 / 비밀번호 찾기</S.LoginToggle>
            </S.Row2>
          </S.LoginInput>

        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Login;
