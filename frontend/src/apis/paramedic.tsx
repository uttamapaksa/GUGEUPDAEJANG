import { privateApi, publicApi } from './';


// 이송 요청 + 병원 리스트 받기
export const getHospitalList = async (latitude: number | null, longitude: number | null, distance: number) => {
  try {
    const res = await privateApi.get(`/member/hospital?latitude=${latitude}&longitude=${longitude}&distance=${distance}`);
    console.log('getHospitalList then', res.data)
    return res.data;
  } catch (err) {
    console.log('getHospitalList catch', err);
  }
};