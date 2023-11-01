import {
  useState, 
  ChangeEvent} from "react"

import { useNavigate } from 'react-router-dom';
import * as S from './HosSignupInput.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';

function HosSignupInput () {
    
  const [address, setAddress] = useState<string>("");
  const [hospitalName, setHospitalName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [phone1, setPhone1] = useState<string>("");
  const [phone2, setPhone2] = useState<string>("");
  const MAX_LENGTH = 50;

  const navigate = useNavigate()
  const goLogin = () => {navigate(`${PATH.Login}`)} 

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setAddress(e.target.value.split(" ").join(""));
  };

  const handleHospitalName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setHospitalName(e.target.value.split(" ").join(""));
  };

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

  const handleRePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setRepassword(e.target.value.split(" ").join(""));
  };

  const handlePhone1 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setPhone1(e.target.value.split(" ").join(""));
  };

  const handlePhone2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setPhone2(e.target.value.split(" ").join(""));
  };


  return(
    <S.Container>
      <S.Row1>
        <A.IptUserInfo
          type='text'
          $width='70%'
          $height='100%'
          placeholder='주소'
          onChange={handleAddress}/>
          
        <A.BtnSubmit
          $margin='0 0 0 auto'
          $width='20%'
          $height='100%'
          $fontSize='2vh'
          $borderRadius='1vh'
          $backgroundColor={theme.color.grayDark}>찾기</A.BtnSubmit>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type="text"
          $width='100%'
          $height='100%'
          placeholder='병원이름'
          onChange={handleHospitalName}/>
      </S.Row1>

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
        <A.IptUserInfo
          type='text'
          $width='100%'
          $height='100%'
          placeholder='전화번호1'
          onChange={handlePhone1}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='text'
          $width='100%'
          $height='100%'
          placeholder='전화번호2'
          onChange={handlePhone2}/>
      </S.Row1>


      <S.Row1>
        <A.BtnSubmit
          $width='100%'
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

export default HosSignupInput