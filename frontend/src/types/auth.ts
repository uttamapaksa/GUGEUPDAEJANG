export interface memberInfo {
  role: string;
  memberId: number;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface SignupToggleProps {
  IsClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HosSignupInputProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHosSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ParaSignupInputProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHosSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchListProps {
  searchList: SearchItemProps[];
  isHosSearch: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchModalProps {
  isHosSearch: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ParaJoinProps {
  email: string;
  password: string;
  name: string;
  imageUrl: string;
  role: string;
  centerId: number;
}

export interface HosJoinProps {
  hospitalId: number;
  email: string;
  password: string;
  name: string;
  imageUrl: string;
  role: string;
  telephone1: string;
  telephone2: string;
  address: string;
  latitude?: number;
  longitude?: number;
}

export interface SearchItemProps {
  id: number;
  region?: string;
  name: string;
  address: string;
  telephone: string;
  latitude?: number;
  longitude?: number;
}
