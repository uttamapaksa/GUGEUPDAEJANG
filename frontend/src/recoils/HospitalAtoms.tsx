import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { HospitalRequestItem, ParamedicItem } from "/src/types/map";

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
export const hospitalSelectedParaId = atom<HospitalRequestItem | undefined>({
  key: "hospitalSelectedParaId",
  default: undefined,
});

export const hospitalRequestList = atom<HospitalRequestItem[] | undefined>({
  key: "hospitalRequestList",
  default: undefined,
});

export const currentPosition = atom({
  key: "currentPosition",
  default: {
    lat:null,
    lon:null
  },
});