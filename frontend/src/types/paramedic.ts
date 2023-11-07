export interface CallProps {
  RecordStart?: () => void;
  RecordStop?: () => void;
  CameraOpen?: () => void;
  CameraClose?: () => void;
  time?: string;
}

export interface CalledHospitalType {
  id?: number;
  hospitalId?: string;
  name?: string;
  address?: string;
  telephone1?: string;
  telephone2?: string;
  latitude?: number;
  longitude?: number;
  bedCount?: number;
  distance?: number;
  time?: number;
  callingTime?: string;
  status?: string;
  reason?: string;
}

export interface CallStateType {
  id: number;
  createdAt: string;
  occurrenceId: number;
  memberId: number;
  ktas: number;
  ageGroup: string;
  gender: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  tags: string[]; // 이 부분은 예시로 string 배열로 설정했습니다. 실제 사용하는 타입에 맞게 수정해야 합니다.
  files: string[];
  distance: number;
  duration: number;
}
