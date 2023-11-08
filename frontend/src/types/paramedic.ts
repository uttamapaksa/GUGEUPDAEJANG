export interface CallProps {
  RecordStart?: () => void;
  RecordStop?: () => void;
  CameraOpen?: () => void;
  CameraClose?: () => void;
  time?: string;
}

export interface CalledHospitalType {
  id: number;
  hospitalId: string;
  name: string;
  address: string;
  telephone1: string;
  telephone2: string;
  latitude: number;
  longitude: number;
  bedCount: number;
  distance: number;
  time: number;
  callingTime: string;
  status: string;
  reason: string;
}

export interface TagType {
  id: number;
  name: string;
}

export interface FileType {
  filePath: string;
  contentType: string;
  size: number;
}

export interface OccurrenceType {
  ktas: string;
  ageGroup: string;
  gender: string;
  symptom: string;
  latitude: number;
  longitude: number;
  address: string;
  tags: TagType[];
  files: FileType[];
}

export interface HospitalListType {
  callingId: number;
  callingTime: number[];
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELED';
  memberId: number;
  hospitalName: string;
  telephone: string;
  latitude: number;
  longitude: number;
  distance: number;
  duration: number;
}