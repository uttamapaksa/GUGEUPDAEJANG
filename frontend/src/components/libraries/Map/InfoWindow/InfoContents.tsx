import {
  AddrP,
  AddrTitle,
  ContentsP,
  ElapseTimeSpan,
  InfoBox, 
  InfoWindowArrow, 
  InfoWindowContainer, 
  KtasDiv, 
  LeftTimeSpan, 
  StartTimeSpan
} from "./InfoContents.style";

export interface InfoProps{
  ktas: number;
  addt: string;
}
//infowindow 내용 - 개선 예정
function InfoContents(props:any) {

  return (
    <InfoWindowContainer>
      <KtasDiv $num={'KTAS'+props.ktas}>
        KTAS{props.ktas}
      </KtasDiv>
      <InfoWindowArrow />
      <InfoBox>
        <AddrP>
          <AddrTitle>
            {props.addr}
          </AddrTitle>
          <span>{11.5}km</span>
        </AddrP>
        <ContentsP>
          <StartTimeSpan>
            {props.requestAt}
          </StartTimeSpan>
          <ElapseTimeSpan>
            요청 대기 {props.elapseMin}분 경과
          </ElapseTimeSpan>
        </ContentsP>
        <hr
          style={{ borderWidth: 0, height: "0.5px", width: "100%", backgroundColor: "#8a8a8a" }}
        />
        <ContentsP>
          <LeftTimeSpan>
            {props.leftTime}분 이내 도착 가능
          </LeftTimeSpan>
        </ContentsP>
      </InfoBox>
    </InfoWindowContainer>
  );
}

export default InfoContents;

