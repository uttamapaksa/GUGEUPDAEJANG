import * as S from './Signup.style';
import M from '/src/components/Commons/Molecules'
import HosSignupInput from '../../components/Signup/HosSignupInput/HosSignupInput';

function Signup() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          <M.Logo/>
          <HosSignupInput/>
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Signup;
