import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { HospitalResponseItem, HospitalTransferItem, ParaRequestItem } from "../types/map";

export const { persistAtom } = recoilPersist();

//병원 지도, 기록, 통계 구분
export const hospitalComponentType = atom({
  key: "hospitalComponentType",
  default: [true, false, false],
  effects_UNSTABLE: [persistAtom],
});

//병원 요청, 이송 구분
export const hospitalSidebarType = atom({
  key: "hospitalSidebarType",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

// export const hospitalSelectedParaId = atom<ParamedicItem | undefined>({
//   key: "hospitalSelectedParaId",
//   default: undefined,
// });

//병원 요청 선택 항목
export const hospitalSelectedRequestItem = atom<ParaRequestItem | undefined>({
  key: "hospitalSelectedRequestItem",
  default: undefined,
});


//병원 요청 리스트
export const hospitalRequestList = atom<ParaRequestItem[] | undefined>({
  key: "hospitalRequestList",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});


//병원 현위치 -> 이후 로그인 시 위치로 바뀔 예정
export const currentPosition = atom<{
  lat: null | number;
  lon: null | number;
}>({
  key: "currentPosition",
  default: {
    lat: null,
    lon: null
  },
});


//병원 응답
export const hospitalResponse = atom<HospitalResponseItem | undefined>({
  key: "hospitalResponse",
  default: undefined,
});

//----------------------------


//병원 이송 선택 항목
export const hospitalSelectedTransferItem = atom<HospitalTransferItem | undefined>({
  key: "hospitalSelectedTransferId",
  default: undefined,
});


//병원 이송 리스트
export const hospitalTransferList = atom<HospitalTransferItem[] | undefined>({
  key: "hospitalTransferList",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});


