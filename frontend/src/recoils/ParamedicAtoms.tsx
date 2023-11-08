import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { TagType, OccurrenceType, HospitalListType, fixedCallingType } from '../types/paramedic';
const { persistAtom } = recoilPersist();

// 구급대원 메인(0), 요청(1), 대기(2), 이송(3), 기록(4), 통계(5) 페이지
export const currentParamedicPageIndexState = atom<number>({
  key: 'currentParamedicPageIndexState',
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

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

// 환자 주요 분류 태그
export const tagsState = atom<TagType[]>({
  key: 'tagsState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 구급대원이 보내는 환자 상태
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
  effects_UNSTABLE: [persistAtom],
});

// 병원 리스트 요청 범위 단계
export const callingStepState = atom<number>({
  key: 'callingStepState',
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

// 구급대원이 받은 요청 병원 리스트
export const HospitalListState = atom<HospitalListType[]>({
  key: 'HospitalListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 요청화면 / 이송화면 플래그
export const showWaitState = atom({
  key: 'showWaitState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

// 이송 확정 후 병원과 환자 정보
export const approvedHospitalId = atom<number>({
  key: 'approvedHospitalId',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

// 요청에 응답한 병원 id
export const fixedCallingState = atom<fixedCallingType>({
  key: 'fixedCallingState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

// 요청에 응답한 병원 id
export const transferHospitalIdState = atom<number>({
  key: 'transferHospitalIdState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

// 이송중인지 여부
export const isTransferringState = atom({
  key: 'isTransferringState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
