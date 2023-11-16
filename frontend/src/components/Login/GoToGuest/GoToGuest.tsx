import { useNavigate } from 'react-router-dom';

import A from '../../Commons/Atoms'
import * as S from './GoToGuest.style'
import PATH from '/src/constants/path';

function GoToGuest () {
  const navigate = useNavigate()
  const goGuest = () => {navigate(`${PATH.Guest}`)} 

  return (
    <S.Container onClick={goGuest}>
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