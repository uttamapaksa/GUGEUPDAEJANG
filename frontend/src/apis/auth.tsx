import { privateApi, publicApi } from "./";
import { 
  HosJoinProps,
  LoginProps, 
  ParaJoinProps } from "../types/auth";

// 로그인
export const postLogin = async (info: LoginProps) => {
  try{
    const response = await publicApi.post("/auth/login", info);
    if (response && response.status === 200) {
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;

        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
    }
    return response.data.role 
  }
    catch (error) {
      console.log('postLogin 실패', error);
    }
  }

// 로그아웃
export const deleteLogout = async () => {
  try{
    const response = await privateApi.delete("/auth/logout");
    return response.status
  }
    catch (error) {
      console.log('deleteLogout 실패', error);
    }
  }

// 구급대원 회원가입
export const postParaJoin = async (info: ParaJoinProps) => {
  console.log(info)
  try{
    const response = await publicApi.post("/member/paramedic/join", info);
    return response.status
  }
    catch (error) {
    console.log('postParaJoin 실패', error);
  }
}

// 병원 회원가입
export const postHosJoin = async (info: HosJoinProps) => {
  try{
    const response = await publicApi.post("/member/hospital/join", info);
    return response.status
  }
    catch (error) {
    console.log('postHosJoin 실패', error);
  }
}