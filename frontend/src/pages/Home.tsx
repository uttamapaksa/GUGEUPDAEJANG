import { styled } from "styled-components";
import { ImgLogo } from "../components/Commons/Atoms/Image";
import { IptUserInfo } from "../components/Commons/Atoms/Input";
import { BtnSubmit } from "../components/Commons/Atoms/Button";
import theme from "../styles";

const Container = styled.div`
background-color: red;
  align-items: center;
  margin-left: 10px;
`;
const MainWrapper = styled.div`
  background-color: #ffae00;
  display: flex;
  align-items: center;
  margin-top: 35px;
`

function Home() {
  return (
    <Container>
      <MainWrapper>
        main page 여기구만
        <ImgLogo
          $width="400px"
          $height="200px"/>
      
        <IptUserInfo
          $width='250px'
          $height="70px"
          placeholder='이메일'></IptUserInfo>

        <BtnSubmit
          $width='100px'
          $height='60px'
          $fontSize='23px'
          $backgroundColor={theme.color.pinkLight}>로그인</BtnSubmit>
      </MainWrapper>
    </Container>
  );
}

export default Home;