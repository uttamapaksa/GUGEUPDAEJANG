import { atom } from "recoil";

export const recordVoiceFile = atom<string>({
  key: "recordVoiceFile",
  default: "",
});

export const recordCameraFile = atom<string>({
  key: "recordCameraFile",
  default: "",
});

export const recordContentFile = atom<string>({
  key: "recordContentFile",
  default: "",
});
