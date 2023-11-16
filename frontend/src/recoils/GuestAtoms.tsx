import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { GuestSelectedItem } from '../types/map';
import { HospitalListType } from '../types/paramedic';
const { persistAtom } = recoilPersist();

//선택된 병원
export const guestSelectedItem = atom<GuestSelectedItem>({
  key: "guestSelectedItem",
  default: {
    hospitalId: 0,
    latitude : 0,
    longitude : 0,
  },
});

// 일반사용자가 받은 요청 병원 리스트
export const GuestHospitalListState = atom<HospitalListType[]>({
  key: 'GuestHospitalListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});