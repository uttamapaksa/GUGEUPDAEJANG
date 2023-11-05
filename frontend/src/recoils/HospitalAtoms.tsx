import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { HospitalResponseItem, ParaRequestItem } from "../types/map";

export const { persistAtom } = recoilPersist();

export const hospitalComponentType = atom({
  key: "hospitalComponentType",
  default: [true, false, false],
  effects_UNSTABLE: [persistAtom],
});

export const hospitalSidebarType = atom({
  key: "hospitalSidebarType",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

// export const hospitalSelectedParaId = atom<ParamedicItem | undefined>({
//   key: "hospitalSelectedParaId",
//   default: undefined,
// });
export const hospitalSelectedParaId = atom<ParaRequestItem | undefined>({
  key: "hospitalSelectedParaId",
  default: undefined,
});

export const hospitalRequestList = atom<ParaRequestItem[] | undefined>({
  key: "hospitalRequestList",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

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

export const hospitalResponse = atom<HospitalResponseItem | undefined>({
  key: "hospitalResponse",
  default: undefined,
});