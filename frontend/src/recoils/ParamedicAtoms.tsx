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
  key: 'recordContentFile',
  default: '이것도 말하세요',
});

export const showWaitState = atom({
  key: 'showWaitState',
  default: true,
});

export const categoriesState = atom<string[]>({
  key: 'categoriesState',
  default: ['의식 없음', '추락', '과다출혈', '심정지 이력', '정신 질환 이력'],
  effects_UNSTABLE: [persistAtom],
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
    tags: [''],
    files: [''],
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
