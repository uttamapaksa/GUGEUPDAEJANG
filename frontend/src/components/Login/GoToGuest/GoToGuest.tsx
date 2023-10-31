import A from '../../Commons/Atoms'
import * as S from './GoToGuest.style'

function GoToGuest () {
  return (
    <S.Container>
      <S.BtnGoToGuest>
        내 주변 응급실 찾기
          <A.ImgLogoEmergencyRoom 
            $margin='0 0 0 4%' 
            $width="15%" />
      </S.BtnGoToGuest>
    </S.Container>
  )
}

export default GoToGuest