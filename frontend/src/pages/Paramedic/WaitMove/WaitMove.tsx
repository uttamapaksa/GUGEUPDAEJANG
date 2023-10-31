import { useState } from 'react';
import * as S from './WaitMove.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

function WaitMove() {
  const [categories, setCategories] = useState<string[]>(['추락', '과다출혈', '과다출혈']);

  return (
    <S.Container>
      <S.Wrapper>
        <S.ParamedicHeader>
          <S.Arrow>
            <A.ImgArrowLeft />
          </S.Arrow>
          <A.TxtHeaderTitle>요청 대기</A.TxtHeaderTitle>
          <S.Arrow>
            <A.ImgArrowRight />
          </S.Arrow>
        </S.ParamedicHeader>

        <S.Map>지도</S.Map>

        <S.ContentBox>
          <S.OpenCloseToggle>
            <A.ImgArrowBottom $margin="auto" $width="5%" $height="60%" />
          </S.OpenCloseToggle>

          <S.Time>
            <div style={{ fontSize: '26px' }}>23.08.23(수) - 13:34:23</div>

            <A.DivTag
              $margin="10px"
              $width="100px"
              $height="40px"
              $fontSize={theme.font.Medium3_23}
              $color={theme.color.white}
              $backgroundColor={theme.color.fontGrey1}
            >
              00:18
            </A.DivTag>
          </S.Time>

          <S.HospitalList>
            <S.ListTitle>보낸 요청</S.ListTitle>

            <S.HospitalItem>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  width: '70%',
                  height: '100%',
                  // border: '1px solid red',
                }}
              >
                <S.ItemTitle>연세대학교 의과대학 강남세브란스 병원</S.ItemTitle>
                <S.ItemNumber>
                  <A.ImgCellphoneGray $width='10%' $margin='0 1.8vh 0 0'/>
                  02-2602-3024
                </S.ItemNumber>
               <S.ItemDist>3.4km</S.ItemDist>
               <S.ItemTime>13분</S.ItemTime>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                  flexWrap: 'wrap',
                  width: '30%',
                  height: '100%',
                  // border: '1px solid red',
                }}
              >
                <S.ItemCallTime>10시 18분에 요청</S.ItemCallTime>
                <A.BtnToggle
                  $width='90%'
                  $height='8vh'
                  $color={theme.color.pinkLight}
                  $border={theme.color.pinkLight}
                >
                  요청 취소
                </A.BtnToggle>
              </div>
            </S.HospitalItem>

            <S.HospitalItem>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  width: '70%',
                  height: '100%',
                  // border: '1px solid red',
                }}
              >
                <S.ItemTitle>연세대학교 의과대학 강남세브란스 병원</S.ItemTitle>
                <S.ItemNumber>
                  <A.ImgCellphoneGray $width='10%' $margin='0 1.8vh 0 0'/>
                  02-2602-3024
                </S.ItemNumber>
               <S.ItemDist>3.4km</S.ItemDist>
               <S.ItemTime>13분</S.ItemTime>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                  flexWrap: 'wrap',
                  width: '30%',
                  height: '100%',
                  // border: '1px solid red',
                }}
              >
                <S.ItemCallTime>10시 18분에 요청</S.ItemCallTime>
                <A.BtnToggle
                  $width='90%'
                  $height='8vh'
                  $color={theme.color.pinkLight}
                  $border={theme.color.pinkLight}
                >
                  요청 취소
                </A.BtnToggle>
              </div>
            </S.HospitalItem>

          </S.HospitalList>

          <S.HospitalList>
            <S.ListTitle>대기 요청</S.ListTitle>
            <S.HospitalItem>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  width: '70%',
                  height: '100%',
                  // border: '1px solid red',
                }}
              >
                <S.ItemTitle>연세대학교 의과대학 강남세브란스 병원</S.ItemTitle>
                <S.ItemNumber>
                  <A.ImgCellphoneGray $width='10%' $margin='0 1.8vh 0 0'/>
                  02-2602-3024
                </S.ItemNumber>
               <S.ItemDist>3.4km</S.ItemDist>
               <S.ItemTime>13분</S.ItemTime>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                  flexWrap: 'wrap',
                  width: '30%',
                  height: '100%',
                  // border: '1px solid red',
                }}
              >
                <S.ItemCallTime>10시 18분에 요청</S.ItemCallTime>
                <A.BtnToggle
                  $width='90%'
                  $height='8vh'
                  $color={theme.color.pinkLight}
                  $border={theme.color.pinkLight}
                >
                  요청 취소
                </A.BtnToggle>
              </div>
            </S.HospitalItem>
          </S.HospitalList>

          <S.HospitalList>
            <S.TotalInformation>
              <S.ItemTitle
                style={{
                height: '5vh',
                fontSize: '4vh',
                fontWeight: '700'
                }}
              >하나병원</S.ItemTitle>
              <S.ItemCallTimeBig>35분 후 도착 예정</S.ItemCallTimeBig>
              <S.Move1>인적 사항</S.Move1>
              <A.DivTag
                $margin="10px"
                $width="200px"
                $height="60px"
                $color={theme.color.white}
                $boxShadow="0 0 2vh 0.4vh rgba(0, 0, 0, 0.2)"
                $backgroundColor={theme.color.grayDarkest}
              >
                청소년 (여)
              </A.DivTag>
              <S.Move1>주요 분류</S.Move1>
              {categories.map((val, idx) => (
                <A.DivTag
                  key={idx}
                  $margin="10px"
                  $padding="0 20px"
                  $width="auto"
                  $height="50px"
                  $fontSize={theme.font.Medium2_24}
                  $boxShadow="0 0 1vh 0.2vh rgba(0, 0, 0, 0.2)"
                >
                  {val}
                </A.DivTag>
              ))}
              <S.Move1>환자 상태</S.Move1>
              <S.Move2>지금 대교 사고 10대 여성 머리 출혈 환자 발생하였습니다. 심정지 이력이 있는 환자입니다.</S.Move2>
            </S.TotalInformation>
          </S.HospitalList>

          <S.Calling>
            <A.BtnMediaRecord
              $margin="10px"
              $width="300px"
              $height="80px"
              $color={theme.color.grayDarkest}
              $border={theme.color.grayDarkest}
            >
              <A.ImgRecordVideoBlack $width="40px" />
              영상 촬영
              <A.ImgArrowBlackRight $width="12px" />
            </A.BtnMediaRecord>
            <A.BtnMediaRecord
              $margin="10px"
              $width="300px"
              $height="80px"
              $color={theme.color.grayDarkest}
              $border={theme.color.grayDarkest}
            >
              <A.ImgRecordVoiceBlack $width="26px" />
              음성 녹음
              <A.ImgArrowBlackRight $width="12px" />
            </A.BtnMediaRecord>
          </S.Calling>
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default WaitMove;
