import {
  useState, 
  ChangeEvent} from "react"
import { useNavigate } from 'react-router-dom';

import * as S from './LoginInput.style'
import A from '../../Commons/Atoms'
import theme from '/src/styles';
import PATH from '/src/constants/path';
import { deleteLogout, postLogin } from "/src/apis/auth";
import { LoginProps } from "/src/types/auth";
import { useRecoilState } from "recoil";
import { memberInfoState } from "/src/recoils/AuthAtoms";

function LoginInput () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [memberInfo, setMemberIngo] =useRecoilState(memberInfoState)
  const MAX_LENGTH = 50;

  const navigate = useNavigate()
  const goSignUp = () => {navigate(`${PATH.Signup}`)} 
  const goHospital = () => {navigate(`${PATH.Hospital}`)} 
  const goParamedic = () => {navigate(`${PATH.Paramedic}`)} 

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    // console.log(email)
    setEmail(e.target.value.split(" ").join(""));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    // console.log(password)
    setPassword(e.target.value.split(" ").join(""));
  };

  const axiosLogin = async ():Promise<void> => {
    const info: LoginProps = {
      email: email,
      password: password,
    }
    try {
      const response = await postLogin(info)
      setMemberIngo(response)
      if (response.role === "PARAMEDIC") {goParamedic()}
      else if (response.role === "HOSPITAL") {goHospital()}
    }
    catch(error) {
      console.log(error)
    }
  }

  const axiosLogout = async ():Promise<void> => {
    try {
      const response = await deleteLogout()
      if (response === 200) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        console.log("로그아웃 완료")
      }
    }
    catch(error) {
      console.log(error)
    }
  }

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
          $backgroundColor={theme.color.fontPink1}
          onClick={() => axiosLogin()}>로그인</A.BtnSubmit>
      </S.Row1>
      
      <S.Row2>
        <S.LoginToggle>
          <A.TxtContent 
            $width='120%'
            onClick={goSignUp}>회원가입</A.TxtContent>/
          <A.TxtContent 
            $width='180%'>비밀번호 찾기</A.TxtContent>
        </S.LoginToggle>
      </S.Row2>
      <S.Row1>
        <A.BtnSubmit
            $margin='0 0 0 auto'
            $width='30%'
            $height='100%'
            $fontSize='2vh'
            $borderRadius='1vh'
            $backgroundColor={theme.color.fontPink1}
            onClick={() => axiosLogout()}>임시 로그아웃</A.BtnSubmit>
      </S.Row1>
    </S.Container>
  )
}

export default LoginInput