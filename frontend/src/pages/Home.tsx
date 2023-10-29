import { styled } from "styled-components";
import { ImgArrowBlackRight, ImgArrowPinkRight, ImgArrowRight, ImgLogo, ImgRecordVideoBlack, ImgRecordVideoPink } from "../components/Commons/Atoms/Image";
import { IptUserInfo } from "../components/Commons/Atoms/Input";
import { BtnKtas, BtnMediaRecord, BtnParaState, BtnSubmit, BtnToggle } from "../components/Commons/Atoms/Button";
import theme from "../styles";
import { TxtHeaderTitle, TxtParamedicTitle } from "../components/Commons/Atoms/Text";
import { DivKtasInfo, DivTag } from "../components/Commons/Atoms/Div";

const Container = styled.div`
  border: 3px solid black;
  align-items: center;
  margin-left: 10px;
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
`

const Ktas = styled.div`
  display: flex;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
`

function Home() {
  return (
    <Container>
      <MainWrapper>
        <ImgLogo
          $width="400px"
        />
      
        <IptUserInfo
          $margin="10px"
          $width='300px'
          $height="60px"
          placeholder='이메일'></IptUserInfo>
        
        <IptUserInfo
          $margin="10px"
          $width='300px'
          $height="60px"
          placeholder='이름'></IptUserInfo>

        <BtnSubmit
          $margin="10px"
          $width='100px'
          $height='60px'
          $backgroundColor={theme.color.pinkLight}>로그인</BtnSubmit>
        
        <BtnSubmit
          $margin="10px"
          $width='100px'
          $height='60px'
          $backgroundColor={theme.color.grayDarkest}>인증</BtnSubmit>
        
        <BtnSubmit
          $margin="10px"
          $width='300px'
          $height='60px'
          $fontSize='23px'
          $backgroundColor={theme.color.pinkLight}>회원가입</BtnSubmit>
        
        <BtnParaState
          $margin="10px"
          $width="200px"
          $height="200px"
          $backgroundColor={theme.color.white}>
          하나병원
        </BtnParaState>

        <BtnParaState
          $margin="10px"
          $width="200px"
          $height="200px"
          $backgroundColor={theme.color.grayDarkest}>
          하나병원
        </BtnParaState>
        
        <TxtParamedicTitle>응급 분류</TxtParamedicTitle>
        <TxtHeaderTitle>환자 등록</TxtHeaderTitle>

        <Ktas>
          <BtnKtas
            $ktas="ktas1"
            $width="150px"
            $height="70px">KTAS1</BtnKtas>
          <BtnKtas
            $ktas="ktas2"
            $width="150px"
            $height="70px"
            $IsClick>KTAS2</BtnKtas>
          <BtnKtas
            $ktas="ktas3"
            $width="150px"
            $height="70px"
            $IsClick>KTAS3</BtnKtas>
          <BtnKtas
            $ktas="ktas4"
            $width="150px"
            $height="70px">KTAS4</BtnKtas>
          <BtnKtas
            $ktas="ktas5"
            $width="150px"
            $height="70px">KTAS5</BtnKtas>
        </Ktas>

        <BtnToggle 
          $margin="10px"
          $width="140px"
          $height="90px"
          $border={theme.color.grayMedium}>
            <p>아동</p>
            <p>(여)</p></BtnToggle>

        <BtnToggle 
          $margin="10px"
          $width="140px"
          $height="90px"
          $IsClick={true}> 
          <p>청소년</p>
          <p>(여)</p></BtnToggle>        

        <BtnToggle 
          $margin="10px"
          $width="200px"
          $height="50px"
          $border={theme.color.grayDarkest}>의식 없음</BtnToggle>     

        <BtnToggle 
          $margin="10px"
          $width="200px"
          $height="50px"
          $IsClick={true}>과다 출혈</BtnToggle>     

        <BtnSubmit
          $margin="10px"
          $width="600px"
          $height="75px"
          $fontSize="32px"
          $backgroundColor={theme.color.pinkDrak}>이송 요청</BtnSubmit>

        <DivTag
          $margin="10px"
          $width="100px"
          $height="40px"
          $fontSize={theme.font.Medium3_23}
          $color={theme.color.white}
          $backgroundColor={theme.color.fontGrey1}>00:18</DivTag>

        <BtnToggle 
          $margin="10px"
          $width="170px"
          $height="80px"
          $color={theme.color.fontPink1}
          $border={theme.color.pinkLight}
          $borderRadius="10px">요청취소</BtnToggle> 
        
        <BtnToggle 
          $margin="10px"
          $width="170px"
          $height="80px"
          $borderRadius="10px"
          $IsClick>요청 보내기</BtnToggle> 

        <DivTag
          $margin="10px"
          $width="200px"
          $height="60px">과다 출혈</DivTag>

        <DivTag
          $margin="10px"
          $width="200px"
          $height="60px"
          $color={theme.color.white}
          $backgroundColor={theme.color.grayDarkest}>청소년 (여)</DivTag>

        <BtnMediaRecord
          $margin="10px"
          $width="300px"
          $height="80px"
          $color={theme.color.pinkLight}
          $border={theme.color.pinkLight}>
            <ImgRecordVideoPink $width="40px"/>
            영상 촬영
            <ImgArrowPinkRight $width="12px"/>
        </BtnMediaRecord> 

        <BtnMediaRecord
          $margin="10px"
          $width="300px"
          $height="80px"
          $color={theme.color.grayDarkest}
          $border={theme.color.grayDarkest}>
            <ImgRecordVideoBlack $width="40px"/>
            영상 통화
            <ImgArrowBlackRight $width="12px"/>
        </BtnMediaRecord> 

        <DivKtasInfo
          $margin="10px"
          $ktas="ktas1"
          $width="100px"
          $height="50px"
          $fontSize={theme.font.Medium5_20}>KTAS1</DivKtasInfo>

        <DivKtasInfo
          $margin="10px"
          $ktas="ktas3"
          $width="80px"
          $height="40px"
          $fontSize={theme.font.Small1_16}>KTAS1</DivKtasInfo>

        <DivTag
          $margin="10px"
          $width="400px"
          $height="50px"
          $color={theme.color.white}
          $borderRadius="0px"
          $fontSize={theme.font.Small1_16}
          $backgroundColor={theme.color.blue}>3분 이내 도착 예정</DivTag>

        <BtnToggle 
          $margin="10px"
          $width="170px"
          $height="80px"
          $borderRadius="0px"
          $color={theme.color.pinkDrak}
          $fontSize={theme.font.Small1_16}>거절</BtnToggle> 

        <BtnToggle 
          $margin="10px"
          $width="170px"
          $height="80px"
          $borderRadius="0px"
          $color={theme.color.white}
          $fontSize={theme.font.Small1_16}
          $backgroundColor={theme.color.pinkDrak}>승인</BtnToggle> 

        <DivTag
          $margin="10px"
          $width="100px"
          $height="30px"
          $fontSize={theme.font.Small1_16}>과다 출혈</DivTag>

      </MainWrapper>
    </Container>
  );
}

export default Home;