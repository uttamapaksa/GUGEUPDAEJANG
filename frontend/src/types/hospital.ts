import { HospitalListType } from "./paramedic";

export interface HospitalItemProps {
  key: number;
  IsGuest?: boolean;
  hospital?: HospitalListType;
  guestHospital?: HospitalListType;
  setHospitals? : (hospitals: HospitalListType[]) => void;
}