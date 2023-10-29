import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const { persistAtom } = recoilPersist();

export const hospitalComponentType = atom({
  key: "hospitalComponentType",
  default: [true, false, false],
  effects_UNSTABLE: [persistAtom],
});
