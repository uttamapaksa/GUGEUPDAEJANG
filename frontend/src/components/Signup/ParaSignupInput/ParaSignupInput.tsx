import { useState, ChangeEvent } from "react"
import { ParaSignupInputProps } from "/src/types/auth";
import { useNavigate } from 'react-router-dom';
import * as S from './ParaSignupInput.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';
import { useRecoilState } from "recoil";
import { paramedicInfoState } from "/src/recoils/AuthAtoms";
import { postParaJoin } from "/src/apis/auth";

function ParaSignupInput ({setIsOpen, setIsHosSearch}: ParaSignupInputProps) {
  const [center, setCenter] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [paramedicInfo, setParamedicInfo] = useRecoilState(paramedicInfoState);
  const MAX_LENGTH = 50;

  const navigate = useNavigate()
  const goLogin = () => {navigate(`${PATH.Login}`)} 

  const handleCenter = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    console.log(center)
    setCenter(e.target.value.split(" ").join(""));
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    console.log(email)
    setEmail(e.target.value.split(" ").join(""));
    setParamedicInfo(prev => ({ ...prev, email: e.target.value.split(" ").join("") }));
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    console.log(name)
    setName(e.target.value.split(" ").join(""));
    setParamedicInfo(prev => ({ ...prev, name: e.target.value.split(" ").join("") }));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    console.log(password)
    setPassword(e.target.value.split(" ").join(""));
    setParamedicInfo(prev => ({ ...prev, password: e.target.value.split(" ").join("") }));
  };

  const handleRePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }    
    console.log(repassword)
    setRepassword(e.target.value.split(" ").join(""));
    console.log(paramedicInfo)
  };

  const axiosParaJoin = async ():Promise<void> => {
    try {
      if (await postParaJoin(paramedicInfo) === 200) {
        console.log("구급대원 회원가입 성공")
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  return(
    <S.Container>
      <S.Row1>
        <A.IptUserInfo
          type='text'
          $width='70%'
          $height='100%'
          placeholder='안전센터'
          onChange={handleCenter}/>
          
        <A.BtnSubmit
          onClick={()=>(setIsOpen(true), setIsHosSearch(false))}
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
        <A.BtnSubmit
          $width='100%'
          $height='100%'
          $fontSize='2vh'
          $borderRadius='1vh'
          $backgroundColor={theme.color.fontPink2}
          onClick={()=>axiosParaJoin()}>회원 가입</A.BtnSubmit>
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

export default ParaSignupInput