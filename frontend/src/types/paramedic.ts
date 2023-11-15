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
  files: (FileType | undefined)[];
}

export interface CallingStepType {
  occurrenceId: number;
  step: number;
}

export interface HospitalListType {
  callingId?: number ;
  callingTime?: string ;
  status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELED';
  memberId?: number;
  hospitalName?: string;
  telephone?: string;
  latitude: number;
  longitude: number;
  distance: number;
  duration?: number;

  id? : number;
  hospitalId? : string;
  name? : string;
  address? : string;
  telephone1? : string;
  telephone2? : string;
  bedCount? : number;
  time? : number
}

export interface fixedCallingType {
  callingId: number;
  transferId: number;
  name: string;
  gender: 'MALE' | 'FEMALE';
  ageGroup: 'INFANT' | 'CHILD' | 'ADOLESCENT' | 'YOUTH' | 'MIDDLE' | 'SENIOR';
  description: string;
  hospitalId: number;
  latitude: number;
  longitude: number;
  videoOn: boolean;
}

export interface ParamedicHistoryType {
  transferId: number;
  date: string;
  transferStartTime: string;
  transferEndTime: string;
  hospitalName: string;
  paramedicName: string;
  accidentAddress: string;
  ageGroup: "INFANT" | "CHILD" | "YOUTH" | "ADULT" | "ELDERLY";
  gender: "MALE" | "FEMALE";
  ktas: "KTAS1" | "KTAS2" | "KTAS3" | "KTAS4" | "KTAS5";
  tags: string[];
  files: string[];
  description: string;
  completed: boolean;
}