import { useState } from 'react';
import * as S from './Main.style';
import A from '/src/components/Commons/Atoms';
import theme from '/src/styles';

function Main() {
  const [selected, setSelected] = useState(0);

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentBox>
          <S.Logo>
            <A.ImgLogo 
              $width="40%" />
          </S.Logo>

          <S.Blank />
          <S.Blank />
          <S.Blank />

          <S.CallWaitToggle>
            <A.BtnParaState
              onClick={()=>setSelected(selected === 1 ? 0 : 1)}
              $width="47.5%" 
              $IsClick={selected === 1 ? true : false}
              >
              <A.TxtContent
                $margin='3vh 0 0 6vh'
                $fontSize='3.2vh'
                $lineHeight='3.2vh'
                $fontWeight='800'
                >
              환자 이송
              </A.TxtContent>
              <A.TxtContent
                $margin='1vh 0 14vh 6vh'
                $fontSize='3.2vh'
                $lineHeight='3.2vh'
                $fontWeight='800'
              >
              요청하기
              </A.TxtContent>


              {selected === 1 
              ? <A.ImgAmbulanceActive $width='18%' $margin='-5vh 0 0 18vh'/> 
              : <A.ImgAmbulance $width='18%' $margin='-5vh 0 0 18vh' />
              }
            </A.BtnParaState>
            <A.BtnParaState 
              onClick={()=>setSelected(selected === 2 ? 0 : 2)}
              $width="47.5%" 
              $IsClick={selected === 2 ? true : false}
              style={{ boxShadow: selected !== 2 ? '0 0 1vh 0.4vh rgba(0, 0, 0, 0.1)' : '0 0 1vh 0.4vh rgba(0, 0, 0, 0.25)' }}
              >
              {selected === 2 
              ? <>
              <A.TxtContent
              $margin='3vh 0 0 6vh'
              $fontSize='3.2vh'
              $lineHeight='3.2vh'
              $fontWeight='800'
              $color={theme.color.white}
              >
                하나병원
              </A.TxtContent>
              <div
              style={{fontSize:'2vh', color: 'gray', margin:'-5.5vh 12.5vh 0 0'}}
              >
                이송 중
              </div>
              <A.TxtContent
              $margin='3vh 0 0 6vh'
              $fontSize='2vh'
              >
                청년여성
              <div style={{fontSize:'1.5vh', color: 'gray', margin:'0.4vh 0 0 1vh'}}>환자</div>
              </A.TxtContent>
              <A.TxtContent
              $margin='-5vh 0 0 6vh'
              $fontSize='2vh'
              >
                34분
              <div style={{fontSize:'1.5vh', color: 'gray',  margin:'0.5vh 0 0 1vh'}}>후 도착 예정</div>
              </A.TxtContent>
              </>
              : <A.TxtContent
              $margin='3vh 0 0 6vh'
              $fontSize='3.2vh'
              $fontWeight='800'
              $color='rgba(0, 0, 0, 0.2)'
              >
                이송 정보
              </A.TxtContent>
              }

              {selected === 2 
              ? <A.ImgRequestBellActive $width='14%' $margin='-5vh 0 0 19vh' /> 
              : <A.ImgRequestBell $width='14%' $margin='-5vh 0 0 19vh'/>
              }
            </A.BtnParaState>
          </S.CallWaitToggle>

          <S.GoToHistory 
            graylight={theme.color.grayLight}
          >
            환자 이송 기록 보기
          </S.GoToHistory>
        </S.ContentBox>
      </S.Wrapper>
    </S.Container>
  );
}

export default Main;
