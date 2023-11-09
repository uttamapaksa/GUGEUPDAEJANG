export interface CallProps {
  RecordStart?: () => void;
  RecordStop?: () => void;
  CameraOpen?: () => void;
  CameraClose?: () => void;
  time?: string;
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
  callingTime: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELED';
  memberId: number;
  hospitalName: string;
  telephone: string;
  latitude: number;
  longitude: number;
  distance: number;
  duration: number;
}

export interface fixedCallingType {
  transferId: number;
  name: string;
  gender: 'MALE' | 'FEMALE';
  ageGroup: 'INFANT' | 'CHILD' | 'ADOLESCENT' | 'YOUTH' | 'MIDDLE' | 'SENIOR';
  description: string;
}
