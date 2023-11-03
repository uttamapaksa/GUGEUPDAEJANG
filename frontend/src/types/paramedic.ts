export interface CallProps {
  RecordStart?: () => void;
  RecordStop?: () => void;
  time?: string;
}

export interface CallHospitalType {
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
  callingTime: string,
  status: string,
  reason: string,
}