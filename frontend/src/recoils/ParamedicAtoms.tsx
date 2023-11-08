import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { CalledHospitalType, OccurrenceType, HospitalListType, TagType } from '../types/paramedic';
const { persistAtom } = recoilPersist();

export const recordVoiceFile = atom<string>({
  key: 'recordVoiceFile',
  default: '',
});

export const recordImageFile = atom<string>({
  key: 'recordImageFile',
  default: '',
});

export const recordVideoFile = atom<string>({
  key: 'recordVideoFile',
  default: '',
});

export const recordContentFile = atom<string>({
  key: 'recordContentFile',
  default: '',
});

export const showWaitState = atom({
  key: 'showWaitState',
  default: true,
});

export const tagsState = atom<TagType[]>({
  key: 'tagsState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const occurrenceState = atom<OccurrenceType>({
  key: 'occurrenceState',
  default: {
    ktas: '',
    ageGroup: '',
    gender: '',
    symptom: '',
    latitude: 0,
    longitude: 0,
    address: '',
    tags: [],
    files: [],
  },
});

export const HospitalListState = atom<HospitalListType[]>({
  key: 'HospitalListState',
  default: [],
});

export const calledHospitalsState = atom<CalledHospitalType[]>({
  key: 'calledHospitalsState',
  default: [],
});

export const isTransportingState = atom({
  key: 'isTransportingState',
  default: false,
});

export const callingTimeState = atom<string>({
  key: 'callingTimeState',
  default: '',
});
