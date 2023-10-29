import * as S from './Login.style';
import theme from '/src/styles';
import { ImgLogo, ImgLogoEmergencyRoom } from '/src/components/Commons/Atoms/Image';
import { IptUserInfo } from '/src/components/Commons/Atoms/Input';
import { BtnSubmit } from '/src/components/Commons/Atoms/Button';

function Login() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          <S.Logo>
            <ImgLogo $width="40%" />
          </S.Logo>

          <S.GoToGuest>
            <S.BtnGoToGuest> 
              내 주변 응급실 찾기
              <ImgLogoEmergencyRoom $margin='0 0 0 4%' $width="15%" />
            </S.BtnGoToGuest>
          </S.GoToGuest>

          <S.LoginInput>
            <S.Row1>
              <IptUserInfo
              $width='70%'
              $height='100%'
              $fontSize='1.6vh' 
              placeholder='이메일'
              >
              </IptUserInfo>
            </S.Row1>

            <S.Row1>
            <IptUserInfo
              $width='70%'
              $height='100%'
              $fontSize='1.6vh' 
              placeholder='이메일'
              >
              </IptUserInfo>
              <BtnSubmit
              $margin='0 0 0 auto'
              $width='20%'
              $height='100%'
              $fontSize='1.6vh'
              $backgroundColor={theme.color.fontPink1}
              >
                로그인
              </BtnSubmit>
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
