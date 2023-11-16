import { privateApi } from ".";

// 오픈비두 연결
export const postMeetConnect = async (transferId: number) => {
  try {
    const res = await privateApi.post(`/transfer/meeting/` + transferId);
    console.log('postMeetConnect', res);
    return res.data.token;
  } catch (err) {
    console.log('postMeetConnect 실패', err);
  }
};

export const deleteMeetConnect = async (transferId: number) => {
  try {
    const res = await privateApi.delete(`/transfer/meeting/` + transferId);
    console.log('deleteMeetConnect', res);
    return res.data.token;
  } catch (err) {
    console.log('deleteMeetConnect 실패', err);
  }
};
