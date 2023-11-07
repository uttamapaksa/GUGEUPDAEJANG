import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
export const { persistAtom } = recoilPersist();
import { CalledHospitalType, CallStateType } from '../types/paramedic';

export const recordVoiceFile = atom<string>({
  key: 'recordVoiceFile',
  default: '',
});

export const recordCameraFile = atom<string>({
  key: 'recordCameraFile',
  default: '',
});

export const recordContentFile = atom<string>({
  key: "recordContentFile",
  default: "",
});

export const showWaitState = atom({
  key: 'showWaitState',
  default: true,
});

interface TagType {
  id: number;
  name: string;
}

export const tagsState = atom<TagType[]>({
  key: 'tagsState',
  default: [],
});

export const paramedicCallState = atom<CallStateType>({
  key: 'paramedicCallState',
  default: {
    id: 0,
    createdAt: '',
    occurrenceId: 0,
    memberId: 0,
    ktas: 0,
    ageGroup: '',
    gender: '',
    description: '',
    latitude: 0,
    longitude: 0,
    address: '',
    tags: [],
    files: [],
    distance: 0,
    duration: 0,
  },
  // effects_UNSTABLE: [persistAtom],
});

export const calledHospitalsState = atom<CalledHospitalType[]>({
  key: 'calledHospitalsState',
  default: [],
});

export const isTransportingState = atom({
  key: 'isTransportingState',
  default: false,
  // effects_UNSTABLE: [persistAtom],
});

export const callingTimeState = atom<string>({
  key: 'callingTimeState',
  default: '',
});

