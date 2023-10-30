import * as S from './Login.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

function Login() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          <S.Logo>
            <A.ImgLogo $width="40%" />
          </S.Logo>

          <S.GoToGuest>
            <S.BtnGoToGuest> 
              내 주변 응급실 찾기
              <A.ImgLogoEmergencyRoom $margin='0 0 0 4%' $width="15%" />
            </S.BtnGoToGuest>
          </S.GoToGuest>

          <S.LoginInput>
            <S.Row1>
              <A.IptUserInfo
              $width='70%'
              $height='100%'
              $fontSize='1.6vh' 
              placeholder='이메일'
              >
              </A.IptUserInfo>
            </S.Row1>

            <S.Row1>
            <A.IptUserInfo
              $width='70%'
              $height='100%'
              $fontSize='1.6vh' 
              placeholder='이메일'
              >
              </A.IptUserInfo>
              <A.BtnSubmit
              $margin='0 0 0 auto'
              $width='20%'
              $height='100%'
              $fontSize='1.6vh'
              $backgroundColor={theme.color.fontPink1}
              >
                로그인
              </A.BtnSubmit>
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
