import * as S from './Signup.style';

function Signup() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>

          <S.Logo>
            <S.ImgLogo />
          </S.Logo>

          <S.SignupInput>
            <S.Row1>
              <S.IptUserInfo />
              <S.BtnSubmit />
            </S.Row1>
            <S.Row1>
              <S.IptUserInfo />
            </S.Row1>
            <S.Row1>
              <S.IptUserInfo />
            </S.Row1>
            <S.Row1>
              <S.IptUserInfo />
            </S.Row1>
            <S.Row1>
              <S.IptUserInfo />
            </S.Row1>
            <S.Row2>
              <S.LoginToggle>회원가입 / 비밀번호 찾기</S.LoginToggle>
            </S.Row2>
          </S.SignupInput>

        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Signup;
