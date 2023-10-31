import { styled } from "styled-components";
import theme from "../styles";
import A from '/src/components/Commons/Atoms/index'
import Spinner from "../components/libraries/Spinner/Spinner";

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
        <A.ImgLogo
          $width="400px"/>
      
        <A.IptUserInfo
          $margin="10px"
          $width='300px'
          $height="60px"
          placeholder='이메일'></A.IptUserInfo>
        
        <A.IptUserInfo
          $margin="10px"
          $width='300px'
          $height="60px"
          placeholder='이름'></A.IptUserInfo>

        <A.BtnSubmit
          $margin="10px"
          $width='100px'
          $height='60px'
          $backgroundColor={theme.color.pinkLight}>로그인</A.BtnSubmit>
        
        <A.BtnSubmit
          $margin="10px"
          $width='100px'
          $height='60px'
          $backgroundColor={theme.color.grayDarkest}>인증</A.BtnSubmit>
        
        <A.BtnSubmit
          $margin="10px"
          $width='300px'
          $height='60px'
          $fontSize='23px'
          $backgroundColor={theme.color.pinkLight}>회원가입</A.BtnSubmit>
        
        <A.BtnParaState
          $margin="10px"
          $width="200px"
          $height="200px"
          $backgroundColor={theme.color.white}>
          하나병원
        </A.BtnParaState>

        <A.BtnParaState
          $margin="10px"
          $width="200px"
          $height="200px"
          $backgroundColor={theme.color.grayDarkest}>
          하나병원
        </A.BtnParaState>
        
        <A.TxtParamedicTitle>응급 분류</A.TxtParamedicTitle>
        <A.TxtHeaderTitle>환자 등록</A.TxtHeaderTitle>

        <Ktas>
          <A.BtnKtas
            $ktas="ktas1"
            $width="150px"
            $height="70px">KTAS1</A.BtnKtas>
          <A.BtnKtas
            $ktas="ktas2"
            $width="150px"
            $height="70px"
            $IsClick>KTAS2</A.BtnKtas>
          <A.BtnKtas
            $ktas="ktas3"
            $width="150px"
            $height="70px"
            $IsClick>KTAS3</A.BtnKtas>
          <A.BtnKtas
            $ktas="ktas4"
            $width="150px"
            $height="70px">KTAS4</A.BtnKtas>
          <A.BtnKtas
            $ktas="ktas5"
            $width="150px"
            $height="70px">KTAS5</A.BtnKtas>
        </Ktas>

        <A.BtnToggle 
          $margin="10px"
          $width="140px"
          $height="90px"
          $border={theme.color.grayMedium}>
            <p>아동</p>
            <p>(여)</p></A.BtnToggle>

        <A.BtnToggle 
          $margin="10px"
          $width="140px"
          $height="90px"
          $IsClick={true}> 
          <p>청소년</p>
          <p>(여)</p></A.BtnToggle>        

        <A.BtnToggle 
          $margin="10px"
          $width="200px"
          $height="50px"
          $border={theme.color.grayDarkest}>의식 없음</A.BtnToggle>     

        <A.BtnToggle 
          $margin="10px"
          $width="200px"
          $height="50px"
          $IsClick={true}>과다 출혈</A.BtnToggle>     

        <A.BtnSubmit
          $margin="10px"
          $width="600px"
          $height="75px"
          $fontSize="32px"
          $backgroundColor={theme.color.pinkDrak}>이송 요청</A.BtnSubmit>

        <A.DivTag
          $margin="10px"
          $width="100px"
          $height="40px"
          $fontSize={theme.font.Medium3_23}
          $color={theme.color.white}
          $backgroundColor={theme.color.fontGrey1}>00:18</A.DivTag>

        <A.BtnToggle 
          $margin="10px"
          $width="170px"
          $height="80px"
          $color={theme.color.fontPink1}
          $border={theme.color.pinkLight}
          $borderRadius="10px">요청취소</A.BtnToggle> 
        
        <A.BtnToggle 
          $margin="10px"
          $width="170px"
          $height="80px"
          $borderRadius="10px"
          $IsClick>요청 보내기</A.BtnToggle> 

        <A.DivTag
          $margin="10px"
          $width="200px"
          $height="60px">과다 출혈</A.DivTag>

        <A.DivTag
          $margin="10px"
          $width="200px"
          $height="60px"
          $color={theme.color.white}
          $backgroundColor={theme.color.grayDarkest}>청소년 (여)</A.DivTag>

        <A.BtnMediaRecord
          $margin="10px"
          $width="300px"
          $height="80px"
          $color={theme.color.pinkLight}
          $border={theme.color.pinkLight}>
            <A.ImgRecordVideoPink $width="40px"/>
            영상 촬영
            <A.ImgArrowPinkRight $width="12px"/>
        </A.BtnMediaRecord> 

        <A.BtnMediaRecord
          $margin="10px"
          $width="300px"
          $height="80px"
          $color={theme.color.grayDarkest}
          $border={theme.color.grayDarkest}>
            <A.ImgRecordVideoBlack $width="40px"/>
            영상 통화
            <A.ImgArrowBlackRight $width="12px"/>
        </A.BtnMediaRecord> 

        <A.DivKtasInfo
          $margin="10px"
          $ktas="ktas1"
          $width="100px"
          $height="50px"
          $fontSize={theme.font.Medium5_20}>KTAS1</A.DivKtasInfo>

        <A.DivKtasInfo
          $margin="10px"
          $ktas="ktas3"
          $width="80px"
          $height="40px"
          $fontSize={theme.font.Small1_16}>KTAS1</A.DivKtasInfo>

        <A.DivTag
          $margin="10px"
          $width="400px"
          $height="50px"
          $color={theme.color.white}
          $borderRadius="0px"
          $fontSize={theme.font.Small1_16}
          $backgroundColor={theme.color.blue}>3분 이내 도착 예정</A.DivTag>

        <A.BtnToggle 
          $margin="10px"
          $width="170px"
          $height="80px"
          $borderRadius="0px"
          $color={theme.color.pinkDrak}
          $fontSize={theme.font.Small1_16}>거절</A.BtnToggle> 

        <A.BtnToggle 
          $margin="10px"
          $width="170px"
          $height="80px"
          $borderRadius="0px"
          $color={theme.color.white}
          $fontSize={theme.font.Small1_16}
          $backgroundColor={theme.color.pinkDrak}>승인</A.BtnToggle> 

        <A.DivTag
          $margin="10px"
          $width="100px"
          $height="30px"
          $fontSize={theme.font.Small1_16}>과다 출혈</A.DivTag>

        <Spinner
          width="50px"
          height="50px"></Spinner>
      </MainWrapper>
    </Container>
  );
}

export default Home;