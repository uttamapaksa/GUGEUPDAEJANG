import { useState } from 'react';
import * as S from './Signup.style';
import M from '/src/components/Commons/Molecules'
import SignupToggle from '/src/components/Signup/SignupToggle/SignupToggle';
import HosSignupInput from '/src/components/Signup/HosSignupInput/HosSignupInput';
import ParaSignupInput from '/src/components/Signup/ParaSignupInput/ParaSignupInput';
// import SignupInput from '/src/components/Signup/SignupInput/SignupInput';
import SearchModal from '/src/components/Signup/SearchModal/SearchModal';

function Signup() {
  const [IsClick, setIsClick] = useState<boolean>(true)

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          <M.Logo/>
          <SignupToggle 
            IsClick={IsClick}
            setIsClick={setIsClick}/>
          {IsClick ? (<ParaSignupInput/> 
          ) : (<HosSignupInput/>)}
          {/* <SignupInput/> */}
          <SearchModal />
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Signup;
