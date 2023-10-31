import * as S from './LoginInput.style'
import A from '../../Commons/Atoms'
import theme from '/src/styles';


function LoginInput () {
  return (
    <S.Container>
      <S.Row1>
        <A.IptUserInfo
        $width='70%'
        $height='100%'
        $fontSize='1.6vh' 
        placeholder='이메일'/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          $width='70%'
          $height='100%'
          $fontSize='1.6vh' 
          placeholder='이메일'/>

        <A.BtnSubmit
          $margin='0 0 0 auto'
          $width='20%'
          $height='100%'
          $fontSize='1.6vh'
          $borderRadius='1vh'
          $backgroundColor={theme.color.fontPink1}>로그인</A.BtnSubmit>
      </S.Row1>
      
      <S.Row2>
        <S.LoginToggle>회원가입 / 비밀번호 찾기</S.LoginToggle>
      </S.Row2>
    </S.Container>
  )
}

export default LoginInput