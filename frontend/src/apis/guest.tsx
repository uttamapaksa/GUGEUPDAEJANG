import { publicApi } from ".";
import { CheckHospitalProps } from "../types/guest";

// 일반사용자 가용병상 조회
export const getCheckHospital = async (info: CheckHospitalProps) => {
  try{
    const response = await publicApi.get("/member/hospital", {params: info});
    return response.data
  }
    catch (error) {
    console.log('getCheckHospital 실패', error);
  }
}