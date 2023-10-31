import {
  useState, 
  ChangeEvent} from "react"
import { useNavigate } from 'react-router-dom';

import * as S from './LoginInput.style'
import A from '../../Commons/Atoms'
import theme from '/src/styles';
import PATH from '/src/constants/path';

function LoginInput () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const MAX_LENGTH = 50;

  const navigate = useNavigate()
  const goSignUp = () => {navigate(`${PATH.Signup}`)} 

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setEmail(e.target.value.split(" ").join(""));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setPassword(e.target.value.split(" ").join(""));
  };

  return (
    <S.Container>
      <S.Row1>
        <A.IptUserInfo
          type='email'
          $width='70%'
          $height='100%'
          placeholder='이메일'
          onChange={handleEmail}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='password'
          $width='70%'
          $height='100%'
          placeholder='비밀번호'
          onChange={handlePassword}/>

        <A.BtnSubmit
          $margin='0 0 0 auto'
          $width='20%'
          $height='100%'
          $fontSize='2vh'
          $borderRadius='1vh'
          $backgroundColor={theme.color.fontPink1}>로그인</A.BtnSubmit>
      </S.Row1>
      
      <S.Row2>
        <S.LoginToggle>
          <A.TxtContent 
            $width='120%'
            onClick={goSignUp}>회원가입</A.TxtContent>/
          <A.TxtContent $width='180%'>비밀번호 찾기</A.TxtContent>
        </S.LoginToggle>
      </S.Row2>
    </S.Container>
  )
}

export default LoginInput