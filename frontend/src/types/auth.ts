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
  results: string[][];
  isHosSearch: boolean;
}

export interface SearchModalProps {
  isHosSearch: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
