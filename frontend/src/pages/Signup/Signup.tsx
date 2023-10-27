import * as S from './Signup.style';

function Signup() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          <S.Logo />
          <S.GoToGuest />
          <S.LoginInput />
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Signup;
