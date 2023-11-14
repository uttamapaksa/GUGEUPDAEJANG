import { UploadFileApi, privateApi } from './';

// 사진, 동영상 파일 업로드
export const postCameraUpload = async (info: File[]) => {
  const data = new FormData();
  data.append('files', info[0]);
  try {
    const res = await UploadFileApi.post(`/calling/upload`, data);
    return res.data[0];
  } catch (err) {
    console.log('postCameraUpload 실패', err);
  }
};

// 음성 파일 업로드
export const postVoiceUpload = async (info: FormData) => {
  try {
    const res = await UploadFileApi.post(`/calling/upload`, info);
    return res.data[0];
  } catch (err) {
    console.log('postVoiceUpload 실패', err);
  }
};

// STT
export const postSTT = async (info: FormData) => {
  try {
    const res = await UploadFileApi.post(`/calling/stt`, info);
    return res.data;
  } catch (err) {
    console.log('postSTT 실패', err);
  }
};

// 태그들 조회
export const getTags = async () => {
  try {
    const res = await privateApi.get(`/calling/tag`);
    console.log('getTags then', res.data);
    return res.data;
  } catch (err) {
    console.log('getTags catch', err);
  }
};

// 태그 추가
export const addTag = async (data: any) => {
  try {
    const res = await privateApi.post(`/calling/tag`, data);
    console.log('addTag then', res.data);
    return res.data;
  } catch (err) {
    console.log('addTag catch', err);
  }
};

// 태그 식제
export const deleteTag = async (tagId: number) => {
  try {
    const res = await privateApi.delete(`/calling/tag/${tagId}`);
    console.log('deleteTag then', res.status);
    return true;
  } catch (err) {
    console.log('deleteTag catch', err);
  }
};

// 사고 저장
export const addCalling = async (data: any) => {
  console.log('data', data);
  try {
    const res = await privateApi.post(`/calling`, data);
    console.log('addCalling then', res.data);
    return res.data;
  } catch (err) {
    console.log('addCalling catch', err);
  }
};

// 병원들 조회
export const getHospitals = async (data: any) => {
  try {
    const res = await privateApi.post(`/calling/hospital`, data);
    console.log('getHospitals then', res.data);
    return res.data;
  } catch (err) {
    console.log('getHospitals catch', err);
  }
};

// 요청 취소
export const cancelCalling = async (callingId: number) => {
  try {
    const res = await privateApi.put(`/calling/cancel/${callingId}`);
    console.log('cancelCalling then', res.status);
    return true;
  } catch (err) {
    console.log('cancelCalling catch', err);
  }
};

// 요청 확정
export const fixCalling = async (callingId: number) => {
  try {
    const res = await privateApi.put(`/calling/fix/${callingId}`);
    console.log('fixCalling then', res.data);
    return res.data;
  } catch (err) {
    console.log('fixCalling catch', err);
  }
};

// 이송 완료
export const finishTransfer = async (transferId: number) => {
  try {
    const res = await privateApi.put(`/transfer/${transferId}`);
    console.log('finishTransfer then', res);
    return true;
  } catch (err) {
    console.log('finishTransfer catch', err);
  }
};

// 구급대원 이송 기록
export const getParamedicHistories = async (startDate: string, endDate: string, all: boolean) => {
  try {
    const res = await privateApi.get(`/transfer/history?startDate=${startDate}&endDate=${endDate}&all=${all}`);
    console.log('getParamedicHistories then', res.data);
    return res.data;
  } catch (err) {
    console.log('getParamedicHistories catch', err);
  }
};
