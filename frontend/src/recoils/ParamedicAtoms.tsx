import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
export const { persistAtom } = recoilPersist();

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

export const informationSelectedState = atom<string>({
  key: 'informationSelectedState',
  default: '',
  // effects_UNSTABLE: [persistAtom],
});

export const ktasState = atom<number | null>({
  key: 'ktasState',
  default: null,
  // effects_UNSTABLE: [persistAtom],
});

export const categoriesState = atom<string[]>({
  key: 'categoriesState',
  default: ['의식 없음', '추락', '과다출혈', '심정지 이력', '정신 질환 이력'],
  // effects_UNSTABLE: [persistAtom],
});

export const categoriesSelectedState = atom<string[]>({
  key: 'categoriesSelectedState',
  default: [],
  // effects_UNSTABLE: [persistAtom],
});

export const paramedicCallState = atom<any>({
  key: 'paramedicCallState',
  default: {
    id: 0,
    createdAt: '',
    occurrenceId: 0,
    memberId: 0,
    ktas: ktasState,
    ageGroup: '',
    gender: '',
    description: '',
    latitude: 0,
    longitude: '',
    address: '',
    tags: categoriesSelectedState,
    files: [''],
    distance: 0,
    duration: 0,
  },
  // effects_UNSTABLE: [persistAtom],
});

export const CallHospitalState = atom({
  key: 'CallHospitalState',
  default: [
    {
      id: 1488,
      hospitalId: 'E2400032',
      name: '청양군 보건의료원',
      address: '충청남도 청양군 청양읍 칠갑산로7길 54',
      telephone1: '041-940-4515',
      telephone2: '041-940-4951',
      latitude: 36.45529646339589,
      longitude: 126.80455836964052,
      bedCount: 6,
      distance: 11.843,
      time: 19,
      callingTime: '2023-11-02T14:28:43.1878399',
      status: 'APPROVED',
      reason: '',
    },
    {
      id: 1489,
      hospitalId: 'E2400032',
      name: '유성구 싸피 병원',
      address: '충청남도 청양군 청양읍 칠갑산로7길 54',
      telephone1: '041-940-4515',
      telephone2: '041-940-4951',
      latitude: 36.45529646339589,
      longitude: 126.80455836964052,
      bedCount: 6,
      distance: 11.843,
      time: 19,
      callingTime: '2023-11-02T14:28:43.1878399',
      status: 'PENDING',
      reason: '',
    },
    {
      id: 1490,
      hospitalId: 'E2400032',
      name: '연세대학교 세브란스 병원',
      address: '충청남도 청양군 청양읍 칠갑산로7길 54',
      telephone1: '041-940-4515',
      telephone2: '041-940-4951',
      latitude: 36.45529646339589,
      longitude: 126.80455836964052,
      bedCount: 6,
      distance: 11.843,
      time: 19,
      callingTime: '2023-11-02T14:28:43.1878399',
      status: 'PENDING',
      reason: '',
    },
    {
      id: 1491,
      hospitalId: 'E2400032',
      name: '연세대학교 세브란스 병원',
      address: '충청남도 청양군 청양읍 칠갑산로7길 54',
      telephone1: '041-940-4515',
      telephone2: '041-940-4951',
      latitude: 36.45529646339589,
      longitude: 126.80455836964052,
      bedCount: 6,
      distance: 11.843,
      time: 19,
      callingTime: '2023-11-02T14:28:43.1878399',
      status: 'REJECTED',
      reason: '',
    },
    {
      id: 1492,
      hospitalId: 'E2400032',
      name: '연세대학교 세브란스 병원',
      address: '충청남도 청양군 청양읍 칠갑산로7길 54',
      telephone1: '041-940-4515',
      telephone2: '041-940-4951',
      latitude: 36.45529646339589,
      longitude: 126.80455836964052,
      bedCount: 6,
      distance: 11.843,
      time: 19,
      callingTime: '2023-11-02T14:28:43.1878399',
      status: 'CANCELED',
      reason: '',
    },
  ],
});

export const isTransportingState = atom({
  key: 'isTransportingState',
  default: false,
  // effects_UNSTABLE: [persistAtom],
});
