import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import {
  TagType,
  FileType,
  OccurrenceType,
  HospitalListType,
  fixedCallingType,
  ParamedicHistoryType,
} from '../types/paramedic';
const { persistAtom } = recoilPersist();

// 구급대원 메인(0), 요청(1), 대기 및 이송(2), 기록(3), 통계(4) 페이지
export const currentParamedicPageIndexState = atom<number>({
  key: 'currentParamedicPageIndexState',
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const recordVoiceFile = atom<FileType | undefined>({
  key: 'recordVoiceFile',
  default: undefined,
});

export const recordImageFile = atom<FileType | undefined>({
  key: 'recordImageFile',
  default: undefined,
});

export const recordVideoFile = atom<FileType | undefined>({
  key: 'recordVideoFile',
  default: undefined,
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

// 요청 중 / 이송 중 플래그
export const isTransferringState = atom({
  key: 'isTransferringState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 이송 중 취소 플래그
export const isCompletedState = atom({
  key: 'isCompletedState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 이송 후 완료 플래그
export const isCanceledState = atom({
  key: 'isCanceledState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 이송 확정 후 병원과 환자 정보
export const fixedCallingState = atom<fixedCallingType>({
  key: 'fixedCallingState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

// 현재 위치 주소
export const currentAddressState = atom<string>({
  key: 'currentAddressState',
  default: '',
});

// 구급대원 이송 기록
export const paramedicHistoriesState = atom<ParamedicHistoryType[]>({
  key: 'paramedicHistoryState',
  default: undefined,
});

// 구급대원 이송 기록 시작 시간
export const startTimeState = atom<any>({
  key: 'startTimeState',
  default: null,
});

// 구급대원 이송 기록 종료 시간
export const endTimeState = atom<any>({
  key: 'endTimeState',
  default: null,
});
