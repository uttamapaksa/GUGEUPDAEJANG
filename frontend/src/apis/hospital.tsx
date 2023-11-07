import { privateApi } from ".";

// 병원 회원가입
export const getMyHospital = async () => {
    try{
      const response = await privateApi.get("/member/my-hospital");
      return response
    }
      catch (error) {
      console.log('getMyHospital 실패', error);
    }
  }