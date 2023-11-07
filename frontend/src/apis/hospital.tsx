import { privateApi } from ".";
import { HospitalResponsePostProps } from "../types/map";

// 병원 회원가입
export const getMyHospital = async () => {
  try {
    const response = await privateApi.get("/member/my-hospital");
    return response
  }
  catch (error) {
    console.log('getMyHospital 실패', error);
  }
}


// 병원 회원가입
export const putHospitalResponse = async (postProps: HospitalResponsePostProps) => {
  console.log("putHospitalResponse", postProps)
  try {
    const response = await privateApi.put("calling/status", postProps);
    return response
  }
  catch (error) {
    console.log('putHospitalResponse 실패', error);
  }
}