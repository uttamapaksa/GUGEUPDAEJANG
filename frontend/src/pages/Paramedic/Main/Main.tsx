import { useEffect } from 'react';
import * as S from './Main.style';
import M from '/src/components/Commons/Molecules';
import GoToHistory from '/src/components/Paramedic/Main/GoToHistory/GoToHistory';
import CallWaitToggle from '/src/components/Paramedic/Main/CallWaitToggle/CallWaitToggle';
import { deleteLogout } from '/src/apis/auth';
import { useNavigate } from 'react-router-dom';
import PATH from '/src/constants/path';

function Main() {
  const navigate = useNavigate();
  const goLogin = () => navigate(PATH.Login);
  
  const axiosLogout = async (): Promise<void> => {
    try {
      const response = await deleteLogout();
      if (response === 200) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        console.log('로그아웃 완료');
        goLogin()
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true });
    navigator.mediaDevices.getUserMedia({ video: true });
  },[])

  return (
    <S.Container>
      <S.Logout
        onClick={axiosLogout}>로그아웃</S.Logout>
      <S.Wrapper>
        <S.ContentBox>  
          <M.Logo />
          <S.Blank />
          <CallWaitToggle />
          <GoToHistory />
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Main;
