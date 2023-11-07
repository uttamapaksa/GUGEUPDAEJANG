import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
export const { persistAtom } = recoilPersist();
import { HosJoinProps, ParaJoinProps, memberInfo } from "../types/auth";


//구급대원 회원가입을 위한 정보
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

//신규 병원 등록(회원가입)을 위한 정보
export const hospitalInfoState = atom<HosJoinProps>({
  key: 'hospitalInfoState',
  default: {
    hospitalId: 0,
    email: "",
    password: "",
    name: "Hospital Name",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/pocket-sch.appspot.com/o/hospital_tmp.png?alt=media&token=3361b47c-fb74-4932-aab5-e28bdce64f4d&_gl=1*ijrqc8*_ga*Nzk4NDA1MzUuMTY5ODEyNTQzMw..*_ga_CW55HF8NVT*MTY5ODEyNTQzMy4xLjEuMTY5ODEyNTUxNS42MC4wLjA.",
    role: "HOSPITAL",
    telephone1: "",
    telephone2: "",
    address: "",
    latitude: 0,
    longitude: 0
  },
  effects_UNSTABLE: [persistAtom],
});

//로그인 시 반환값
export const memberInfoState = atom<memberInfo>({
  key : 'memberInfoState',
  default: {
    role: "",
    memberId: 0
  }
})
