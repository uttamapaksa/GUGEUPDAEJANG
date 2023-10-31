import * as S from './Signup.style';
import M from '/src/components/Commons/Molecules'
import SignupInput from '/src/components/Signup/SignupInput/SignupInput';

function Signup() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          <M.Logo/>
          <SignupInput/>
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Signup;
