import { atom } from "recoil";
import { ParaJoinProps } from "../types/auth";

export const paramedicInfoState = atom<ParaJoinProps>({
  key: 'paramedicInfoState',
  default: {
    email: "",
    password: "",
    name: "",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/pocket-sch.appspot.com/o/hospital_tmp.png?alt=media&token=3361b47c-fb74-4932-aab5-e28bdce64f4d&_gl=1*ijrqc8*_ga*Nzk4NDA1MzUuMTY5ODEyNTQzMw..*_ga_CW55HF8NVT*MTY5ODEyNTQzMy4xLjEuMTY5ODEyNTUxNS42MC4wLjA.",
    role: "PARAMEDIC",
    centerId: 1
  }
});