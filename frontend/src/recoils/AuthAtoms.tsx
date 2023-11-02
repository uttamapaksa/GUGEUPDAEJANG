import { atom } from "recoil";
import { HosJoinProps, ParaJoinProps } from "../types/auth";

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

export const hospitalInfoState = atom<HosJoinProps>({
  key: 'hospitalInfoState',
  default: {
    hospitalId: "",
    email: "",
    password: "",
    name: "Hospital Name",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/pocket-sch.appspot.com/o/hospital_tmp.png?alt=media&token=3361b47c-fb74-4932-aab5-e28bdce64f4d&_gl=1*ijrqc8*_ga*Nzk4NDA1MzUuMTY5ODEyNTQzMw..*_ga_CW55HF8NVT*MTY5ODEyNTQzMy4xLjEuMTY5ODEyNTUxNS42MC4wLjA.",
    role: "HOSPITAL",
    telephone1: "",
    telephone2: "",
    address: "",
    latitude: 12.345678,
    longitude: -98.765432
  }
});