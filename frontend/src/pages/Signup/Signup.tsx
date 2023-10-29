import * as S from './Signup.style';
import { BtnSubmit } from '/src/components/Commons/Atoms/Button';
import { ImgLogo } from '/src/components/Commons/Atoms/Image';
import { IptUserInfo } from '/src/components/Commons/Atoms/Input';
import theme from '/src/styles';

function Signup() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>

          <S.Logo>
            <ImgLogo $width="40%" />
          </S.Logo>

          <S.SignupInput>
            <S.Row1>
            <IptUserInfo
              $width='70%'
              $height='100%'
              $fontSize='2vh' 
              $boxShadow='0 0 0.3vh 0.3vh rgba(0, 0, 0, 0.10)'
              placeholder='이메일'
              >
              </IptUserInfo>
              <BtnSubmit
              $margin='0 0 0 auto'
              $width='20%'
              $height='100%'
              $fontSize='2vh'
              $backgroundColor={theme.color.grayDarkest}
              >
                인증
              </BtnSubmit>
            </S.Row1>
            <S.Row1>
            <IptUserInfo
              $width='100%'
              $height='100%'
              $fontSize='2vh' 
              $boxShadow='0 0 0.3vh 0.3vh rgba(0, 0, 0, 0.10)'
              placeholder='이름'
              >
              </IptUserInfo>
            </S.Row1>
            <S.Row1>
            <IptUserInfo
              $width='100%'
              $height='100%'
              $fontSize='2vh' 
              $boxShadow='0 0 0.3vh 0.3vh rgba(0, 0, 0, 0.10)'
              placeholder='비밀번호'
              >
              </IptUserInfo>
            </S.Row1>
            <S.Row1>
            <IptUserInfo
              $width='100%'
              $height='100%'
              $fontSize='2vh' 
              $boxShadow='0 0 0.3vh 0.3vh rgba(0, 0, 0, 0.10)'
              placeholder='비밀번호 확인'
              >
              </IptUserInfo>
            </S.Row1>
            <S.Row1>
            <BtnSubmit
              $margin='0 auto'
              $width='95%'
              $height='100%'
              $fontSize='2vh'
              $backgroundColor={theme.color.fontPink2}
              >
                회원 가입
              </BtnSubmit>
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
