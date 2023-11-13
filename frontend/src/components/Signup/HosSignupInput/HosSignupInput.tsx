import { useState, useEffect, ChangeEvent } from "react"
import { useNavigate } from 'react-router-dom';

import * as S from './HosSignupInput.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';
import Spinner from '../../libraries/Spinner/Spinner';
import LoginFailModal from "../../Commons/Molecules/LoginFailModal/LoginFailModal";

import { HosSignupInputProps } from "/src/types/auth";
import { getCheckEmail, postHosJoin } from "/src/apis/auth";

import { useRecoilState, useResetRecoilState } from "recoil";
import { hospitalInfoState } from "/src/recoils/AuthAtoms";

function HosSignupInput ({setIsOpen, setIsHosSearch}: HosSignupInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setReShowPassword] = useState(false);
  const [repassword, setRepassword] = useState<string>("");
  const [hospitalInfo, setHospitalInfo] = useRecoilState(hospitalInfoState);
  const resetHospitalInfo = useResetRecoilState(hospitalInfoState);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const MAX_LENGTH = 50;

  const navigate = useNavigate()
  const goLogin = () => {navigate(PATH.Login)} 

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setHospitalInfo(prev => ({ ...prev, address: e.target.value.split(" ").join("") }));
  };
  
  const handleHospitalName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setHospitalInfo(prev => ({ ...prev, name: e.target.value.split(" ").join("") }));
  };
  
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setHospitalInfo(prev => ({ ...prev, email: e.target.value.split(" ").join("") }));
  };
  
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
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
    setHospitalInfo(prev => ({ ...prev, telephone1: e.target.value.split(" ").join("") }));
  };

  const handlePhone2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setHospitalInfo(prev => ({ ...prev, telephone2: e.target.value.split(" ").join("") }));
  };

  const axiosHosJoin = async ():Promise<void> => {
    try {
      if (await postHosJoin(hospitalInfo) === 200) {
        console.log("병원 회원가입 성공");
        alert(`${hospitalInfo.name}의 회원가입을 환영합니다`);
        goLogin();
      }
    }
    catch(error) {
      console.log(error)
      alert(`회원가입에 실패하였습니다.`);
    }
  }

  function validateEmail(email: string) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }

  const axiosCheckEmail = async ():Promise<void> => {
    setShowSpinner(true);
    if (!validateEmail(hospitalInfo.email)) {
      setIsAlertOpen(true)
      setModalContent('유효하지 않은 이메일 주소입니다.')
      setShowSpinner(false);
      return;
    }

    try {
      const response = await getCheckEmail(hospitalInfo.email);
      console.log(response)
      setIsAlertOpen(true)
      if (response.alreadyExists) {
        setModalContent('이미 존재하는 이메일입니다.')
      } else {
        setModalContent('이메일 인증에 성공하였습니다')
      }
    } catch (error) {
      setIsAlertOpen(true)
      setModalContent('이메일 인증에 실패하였습니다')
      console.log(error);
    }
    setShowSpinner(false);
  }

  useEffect(() => {
    resetHospitalInfo();
  
  }, [])

  return(
    <S.Container>
      {isAlertOpen && <LoginFailModal content={modalContent} setIsOpen={setIsAlertOpen} />}
      <S.Row1>
        <A.IptUserInfo
          type='text'
          $width='70%'
          $height='100%'
          placeholder='주소'
          $color='black'
          value={hospitalInfo.address}
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
          $color='black'
          value={hospitalInfo.name}
          onChange={handleHospitalName}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='email'
          $width='70%'
          $height='100%'
          placeholder='이메일'
          $color='black'
          value={hospitalInfo.email}
          onChange={handleEmail}/>
          
        <A.BtnSubmit
          $margin='0 0 0 auto'
          $width='20%'
          $height='100%'
          $fontSize='2vh'
          $borderRadius='1vh'
          $backgroundColor={theme.color.grayDarkest}
          onClick={() => {axiosCheckEmail()}}>
            {showSpinner ? <Spinner color='#ffffff' width="8vh" height="8vh" top="71.4vh" /> : '인증'}
          </A.BtnSubmit>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type={showPassword ? "text" : "password"}
          $width='100%'
          $height='100%'
          placeholder='비밀번호'
          value={hospitalInfo.password}
          onChange={handlePassword}>
          </A.IptUserInfo>
          <S.ImgPassword
            src="/src/assets/share/check-password.png" alt="" 
            onClick={()=>setShowPassword(prev => !prev)}
          />
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type={showRePassword ? "text" : "password"}
          $width='100%'
          $height='100%'
          placeholder='비밀번호 확인'
          value={repassword}
          onChange={handleRePassword}/>
          <S.ImgPassword
            src="/src/assets/share/check-password.png" alt="" 
            onClick={()=>setReShowPassword(prev => !prev)}
          />
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='text'
          $width='100%'
          $height='100%'
          $color='black'
          placeholder='전화번호1'
          value={hospitalInfo.telephone1}
          onChange={handlePhone1}/>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type='text'
          $width='100%'
          $height='100%'
          $color='black'
          placeholder='전화번호2'
          value={hospitalInfo.telephone2}
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
          <S.TxtContent1 onClick={goLogin}>로그인</S.TxtContent1>
            / 
          <S.TxtContent2>비밀번호 찾기</S.TxtContent2>
        </S.LoginToggle>
      </S.Row2>
    </S.Container>
  )
}

export default HosSignupInput