import {
  useState, 
  ChangeEvent} from "react"

import { useNavigate } from 'react-router-dom';
import * as S from './SignupInput.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';

function SignupInput () {
  const [email, setEmail] = useState<string>("");
  const [Name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const MAX_LENGTH = 20;

  const navigate = useNavigate()
  const goLogin = () => {navigate(`${PATH.Login}`)} 

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setEmail(e.target.value.split(" ").join(""));
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setName(e.target.value.split(" ").join(""));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setPassword(e.target.value.split(" ").join(""));
  };

  const handleRePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setRepassword(e.target.value.split(" ").join(""));
  };


  return(
    <S.Container>
      <S.Row1>
        <A.IptUserInfo
          type='email'
          $width='70%'
          $height='100%'
          placeholder='이메일'
          onChange={handleEmail}/>
          
        <A.BtnSubmit
          $margin='0 0 0 auto'
          $width='20%'
          $height='100%'
          $fontSize='2vh'
          $borderRadius='1vh'
          $backgroundColor={theme.color.grayDarkest}>인증</A.BtnSubmit>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type="text"
          $width='100%'
          $height='100%'
          placeholder='이름'
          onChange={handleName}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='password'
          $width='100%'
          $height='100%'
          placeholder='비밀번호'
          onChange={handlePassword}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='password'
          $width='100%'
          $height='100%'
          placeholder='비밀번호 확인'
          onChange={handleRePassword}/>
      </S.Row1>

      <S.Row1>
        <A.BtnSubmit
          $margin='0 auto'
          $width='95%'
          $height='100%'
          $fontSize='2vh'
          $borderRadius='1vh'
          $backgroundColor={theme.color.fontPink2}>회원 가입</A.BtnSubmit>
      </S.Row1>
      
      <S.Row2>
        <S.LoginToggle>        
          <A.TxtContent 
            $width='120%'
            onClick={goLogin}>로그인</A.TxtContent>/ 
          <A.TxtContent $width='180%'>비밀번호 찾기</A.TxtContent>
        </S.LoginToggle>
      </S.Row2>
    </S.Container>

  )
}

export default SignupInput