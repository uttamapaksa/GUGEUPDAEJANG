import { privateApi } from ".";
import { HospitalResponsePostProps } from "../types/map";

// 병원 정보 가져오기
export const getMyHospital = async () => {
  try {
    const response = await privateApi.get("/member/my-hospital");
    console.log(response);
    
    return response
  }
  catch (error) {
    console.log('getMyHospital 실패', error);
  }
}
// 병원 정보 가져오기
export const getHospitalImg = async (memberId:number) => {
  try {
    const response = await privateApi.get("/member/"+memberId);
    console.log(response);
    
    return response
  }
  catch (error) {
    console.log('getMyHospital 실패', error);
  }
}

// 병원 응답
export const putHospitalResponse = async (postProps: HospitalResponsePostProps) => {
  console.log("putHospitalResponse", postProps)
  try {
    const response = await privateApi.put("/calling/status", postProps);
    return response
  }
  catch (error) {
    console.log('putHospitalResponse 실패', error);
  }
}