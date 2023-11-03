import {
  AddrP,
  AddrTitle,
  BottomHr,
  ContentsP,
  ElapseTimeSpan,
  InfoBox,
  InfoWindowArrow,
  InfoWindowContainer,
  LeftTimeSpan,
  StartTimeSpan
} from "./InfoContents.style";
import A from "/src/components/Commons/Atoms";

export interface InfoProps {
  ktas: number;
  addt: string;
}
//infowindow 내용 - 개선 예정
function InfoContents(props: any) {

  return (
    <>
      <InfoWindowContainer id={'infowindow' + props.id} onClick={() => props.selectMarker(props.id)}>
        <InfoBox>
          <A.DivKtasInfo
            $position="absolute"
            $right="0%"
            $top="0%"
            $ktas={props.ktas.toLowerCase()}
            $width="40px"
            $height="20px"
            $borderRadius="0px 0px 0px 5px"
            $fontSize="10px">
            {props.ktas}
          </A.DivKtasInfo>
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
          <BottomHr />
          <ContentsP>
            <LeftTimeSpan>
              {props.leftTime}분 이내 도착 가능
            </LeftTimeSpan>
          </ContentsP>
        </InfoBox>
      </InfoWindowContainer>
      <InfoWindowArrow />
    </>
  );
}

export default InfoContents;

