import { privateApi } from './';

// 태그들 조회
export const getTags = async () => {
  try {
    const res = await privateApi.get(`/calling/tag`);
    console.log('getTags then', res.data)
    return res.data;
  } catch (err) {
    console.log('getTags catch', err);
  }
};

// 태그 추가
export const addTag = async (data: any) => {
  try {
    const res = await privateApi.post(`/calling/tag`, data);
    console.log('addTag then', res.data)
    return res.data;
  } catch (err) {
    console.log('addTag catch', err);
  }
};

// 태그 식제
export const deleteTag = async (tagId: number) => {
  try {
    const res = await privateApi.delete(`/calling/tag/${tagId}`,);
    console.log('deleteTag then', res.data)
    return res.data;
  } catch (err) {
    console.log('deleteTag catch', err);
  }
};

// 사고 저장
export const addCalling = async (data: any) => {
  try {
    const res = await privateApi.post(`/calling`, data);
    console.log('addCalling then', res.data)
    return res.data;
  } catch (err) {
    console.log('addCalling catch', err);
  }
};

// 병원들 조회
export const getHospitals = async (data: any) => {
  try {
    const res = await privateApi.post(`/calling/hospital`, data);
    console.log('getHospitals then', res.data)
    return res.data;
  } catch (err) {
    console.log('getHospitals catch', err);
  }
};