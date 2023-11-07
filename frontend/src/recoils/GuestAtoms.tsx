import { atom } from 'recoil';
import { GuestSelectedItem } from '../types/map';



//선택된 병원
export const guestSelectedItem = atom<GuestSelectedItem>({
  key: "guestSelectedItem",
  default: {
    hospitalId: 0,
    latitude : 0,
    longitude : 0,
  },
});