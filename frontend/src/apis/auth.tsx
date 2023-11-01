import { publicApi } from "./";
import { LoginProps } from "../types/auth";

// 로그인
export const postLogin = async (info: LoginProps) => {
  try{
    const response = await publicApi.post("/auth/login", info);

    if (response && response.status === 200) {
        const accessToken = response.data.jwtToken.accessToken;
        const refreshToken = response.data.jwtToken.refreshToken;

        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
    } 
  }
    catch (error) {
      console.log('postLogin을 실패한 이유는??', error);
    }
  }