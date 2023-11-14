import { privateApi } from ".";

export const getReportHeader = async () => {
  try{
    const res = await privateApi.get("/report/header");
    return res.data
  }
    catch (error) {
      console.log('getReportHeader 실패', error);
    }
  }
  
export const getReportTime = async () => {
  try{
    const res = await privateApi.get("/report/time");
    return res.data
  }
    catch (error) {
      console.log('getReportTime 실패', error);
    }
  }

export const getReportStatus = async () => {
  try{
    const res = await privateApi.get("/report/status");
    return res.data
  }
    catch (error) {
      console.log('getReportStatus 실패', error);
    }
  }

export const getReportAge = async () => {
  try{
    const res = await privateApi.get("/report/age");
    return res.data
  }
    catch (error) {
      console.log('getReportAge 실패', error);
    }
  }