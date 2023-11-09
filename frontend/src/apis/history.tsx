import { privateApi } from ".";

export const getHistoryList = async (getParam: string) => {
    // console.log("getHistoryList : " + getParam)
    try {
      const response = await privateApi.get(getParam);
      return response
    }
    catch (error) {
      console.log('getHistoryList 실패', error);
    }
}