import { useState, ChangeEvent } from "react"
import { HosSignupInputProps } from "/src/types/auth";
import { useNavigate } from 'react-router-dom';
import * as S from './HosSignupInput.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';
import { getCheckEmail, postHosJoin } from "/src/apis/auth";
import { hospitalInfoState } from "/src/recoils/AuthAtoms";
import { useRecoilState } from "recoil";

function HosSignupInput ({setIsOpen, setIsHosSearch}: HosSignupInputProps) {
    
  const [address, setAddress] = useState<string>("");
  const [hospitalName, setHospitalName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [phone1, setPhone1] = useState<string>("");
  const [phone2, setPhone2] = useState<string>("");
  const [hospitalInfo, setHospitalInfo] = useRecoilState(hospitalInfoState);

  const MAX_LENGTH = 50;

  const navigate = useNavigate()
  const goLogin = () => {navigate(`${PATH.Login}`)} 

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setAddress(e.target.value.split(" ").join(""));
    setHospitalInfo(prev => ({ ...prev, address: e.target.value.split(" ").join("") }));
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
    setHospitalInfo(prev => ({ ...prev, email: e.target.value.split(" ").join("") }));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setPassword(e.target.value.split(" ").join(""));
    setHospitalInfo(prev => ({ ...prev, password: e.target.value.split(" ").join("") }));
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
    setHospitalInfo(prev => ({ ...prev, phone1: e.target.value.split(" ").join("") }));
  };

  const handlePhone2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setPhone2(e.target.value.split(" ").join(""));
    setHospitalInfo(prev => ({ ...prev, phone2: e.target.value.split(" ").join("") }));
  };

  const axiosHosJoin = async ():Promise<void> => {
    try {
      if (await postHosJoin(hospitalInfo) === 200) {
        console.log("구급대원 회원가입 성공")
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  const axiosCheckEmail = async ():Promise<void> => {
    try {
      const response = await getCheckEmail(email)
      console.log(response.alreadyExists)
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
          placeholder='주소'
          value={address}
          onChange={handleAddress}/>
          
        <A.BtnSubmit
          onClick={()=>(setIsOpen(true), setIsHosSearch(true))}
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
          value={hospitalName}
          onChange={handleHospitalName}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='email'
          $width='70%'
          $height='100%'
          placeholder='이메일'
          value={email}
          onChange={handleEmail}/>
          
        <A.BtnSubmit
          $margin='0 0 0 auto'
          $width='20%'
          $height='100%'
          $fontSize='2vh'
          $borderRadius='1vh'
          $backgroundColor={theme.color.grayDarkest}
          onClick={() => {axiosCheckEmail()}}>인증</A.BtnSubmit>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='password'
          $width='100%'
          $height='100%'
          placeholder='비밀번호'
          value={password}
          onChange={handlePassword}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='password'
          $width='100%'
          $height='100%'
          placeholder='비밀번호 확인'
          value={repassword}
          onChange={handleRePassword}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='text'
          $width='100%'
          $height='100%'
          placeholder='전화번호1'
          value={phone1}
          onChange={handlePhone1}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='text'
          $width='100%'
          $height='100%'
          placeholder='전화번호2'
          value={phone2}
          onChange={handlePhone2}/>
      </S.Row1>


      <S.Row1>
        <A.BtnSubmit
          $width='100%'
          $height='100%'
          $fontSize='2vh'
          $borderRadius='1vh'
          $backgroundColor={theme.color.fontPink2}
          onClick={() => axiosHosJoin()}>회원 가입</A.BtnSubmit>
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