import * as S from './Toggle.style';
import A from '/src/components/Commons/Atoms';

function Toggle() {
  return (
    <S.OpenCloseToggle>
      <A.ImgArrowBottom $margin="auto" $width="3vh" />
    </S.OpenCloseToggle>
  );
}

export default Toggle;
