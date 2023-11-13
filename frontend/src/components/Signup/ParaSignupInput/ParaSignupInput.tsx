import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './ParaSignupInput.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';
import PATH from '/src/constants/path';
import Spinner from '../../libraries/Spinner/Spinner';
import LoginFailModal from '../../Commons/Molecules/LoginFailModal/LoginFailModal';

import { ParaSignupInputProps } from '/src/types/auth';
import { getCheckEmail, postParaJoin } from '/src/apis/auth';

import { useRecoilState } from 'recoil';
import { centerState, paramedicInfoState } from '/src/recoils/AuthAtoms';

function ParaSignupInput({ setIsOpen, setIsHosSearch }: ParaSignupInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setReShowPassword] = useState(false);
  const [center, setCenter] = useRecoilState(centerState);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repassword, setRepassword] = useState<string>('');
  const [paramedicInfo, setParamedicInfo] = useRecoilState(paramedicInfoState);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const MAX_LENGTH = 50;

  const navigate = useNavigate();
  const goLogin = () => {
    navigate(PATH.Login);
  };

  const handleCenter = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setCenter(e.target.value.split(' ').join(''));
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setEmail(e.target.value.split(' ').join(''));
    setParamedicInfo((prev) => ({ ...prev, email: e.target.value.split(' ').join('') }));
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setName(e.target.value.split(' ').join(''));
    setParamedicInfo((prev) => ({ ...prev, name: e.target.value.split(' ').join('') }));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setPassword(e.target.value.split(' ').join(''));
    setParamedicInfo((prev) => ({ ...prev, password: e.target.value.split(' ').join('') }));
  };

  const handleRePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setRepassword(e.target.value.split(' ').join(''));
  };

  const axiosParaJoin = async (): Promise<void> => {
    try {
      if ((await postParaJoin(paramedicInfo)) === 200) {
        console.log('구급대원 회원가입 성공');
        alert(`${paramedicInfo.name}님의 회원가입을 환영합니다`);
        goLogin();
      }
    } catch (error) {
      console.log(error);
      alert(`회원가입에 실패하였습니다.`);
    }
  };

  function validateEmail(email: string) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }

  const axiosCheckEmail = async (): Promise<void> => {
    setShowSpinner(true);
    if (!validateEmail(email)) {
      setIsAlertOpen(true)
      setModalContent('유효하지 않은 이메일 주소입니다.')
      setShowSpinner(false);
      return;
    }
    
    try {
      const response = await getCheckEmail(email);
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
  };

  return (
    <S.Container>
      {isAlertOpen && <LoginFailModal content={modalContent} setIsOpen={setIsAlertOpen} />}
      <S.Row1>
        <A.IptUserInfo
          type="text"
          $width="70%"
          $height="100%"
          placeholder="안전센터"
          value={center}
          onChange={handleCenter}
        />

        <A.BtnSubmit
          onClick={() => (setIsOpen(true), setIsHosSearch(false))}
          $margin="0 0 0 auto"
          $width="20%"
          $height="100%"
          $fontSize="2vh"
          $borderRadius="1vh"
          $backgroundColor={theme.color.grayDark}
        >
          찾기
        </A.BtnSubmit>
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo type="text" $width="100%" $height="100%" placeholder="이름" value={name} onChange={handleName} />
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type={showPassword ? 'text' : 'password'}
          $width="100%"
          $height="100%"
          placeholder="비밀번호"
          value={password}
          onChange={handlePassword}
        />
        <S.ImgPassword
          src="/src/assets/share/check-password.png"
          alt=""
          onClick={() => setShowPassword((prev) => !prev)}
        />
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type={showRePassword ? 'text' : 'password'}
          $width="100%"
          $height="100%"
          placeholder="비밀번호 확인"
          value={repassword}
          onChange={handleRePassword}
        />
        <S.ImgPassword
          src="/src/assets/share/check-password.png"
          alt=""
          onClick={() => setReShowPassword((prev) => !prev)}
        />
      </S.Row1>

      <S.Row1>
        <A.IptUserInfo
          type="email"
          $width="70%"
          $height="100%"
          placeholder="이메일"
          value={email}
          onChange={handleEmail}
        />

        <A.BtnSubmit
          $margin="0 0 0 auto"
          $width="20%"
          $height="100%"
          $fontSize="2vh"
          $borderRadius="1vh"
          $backgroundColor={theme.color.grayDarkest}
          onClick={axiosCheckEmail}
        >
          {showSpinner ? <Spinner color='#ffffff' width="8vh" height="8vh" top="71.4vh" /> : '인증'}
        </A.BtnSubmit>
      </S.Row1>

      <S.Row1>
        <A.BtnSubmit
          $width="100%"
          $height="100%"
          $fontSize="2vh"
          $borderRadius="1vh"
          $backgroundColor={theme.color.fontPink2}
          onClick={() => axiosParaJoin()}
        >
          회원 가입
        </A.BtnSubmit>
      </S.Row1>

      <S.Row2>
        <S.LoginToggle>
          <S.TxtContent1 onClick={goLogin}>로그인</S.TxtContent1>
            /
          <S.TxtContent2>비밀번호 찾기</S.TxtContent2>
        </S.LoginToggle>
      </S.Row2>
    </S.Container>
  );
}

export default ParaSignupInput;
