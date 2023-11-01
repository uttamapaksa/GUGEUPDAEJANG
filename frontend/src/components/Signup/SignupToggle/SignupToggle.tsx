import * as S from './SignupToggle.style'

export interface SignupToggleProps {
  IsClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignupToggle({IsClick, setIsClick}: SignupToggleProps){

  return (
    <S.Container>
      <S.ToggleBox>
        <S.Text onClick={() => setIsClick(true)}>구급대원</S.Text>
        <S.Text onClick={() => setIsClick(false)}>병원</S.Text>
        <S.Btn $IsClick={IsClick}>{IsClick ? "구급대원" : "병원"}</S.Btn>
      </S.ToggleBox>
    </S.Container>
  )
}
export default SignupToggle