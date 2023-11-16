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
import { ItemParaType } from "/src/components/Hospital/Main/HospitalMainSidebar/Request/ParamedicItem/ParamedicListItem.style";
import { expectedTime, timeToString, turmToString } from "/src/constants/function";
import { AGEGROUP, GENDER } from "/src/constants/variable";
import theme from "/src/styles";

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
              {AGEGROUP[props.ageGroup]} ({GENDER[props.gender]})

            </AddrTitle>
            {/* <span>{props.distance}km</span> */}
          </AddrP>
          {props.address}
          <ContentsP>
            <StartTimeSpan>
              {timeToString(props.createdAt)}
            </StartTimeSpan>
            <ElapseTimeSpan>
              요청 대기 {turmToString(props.createdAt)}분 경과
            </ElapseTimeSpan>
          </ContentsP>
          <div style={{ width: "100%", margin: "0 auto" }}>
            {props.tags.map((item: string, index: number) => (
              <A.DivTag
                key={index}
                $margin="4px 2px 10px 2px"
                $width="fit-content"
                $height="18px"
                $borderRadius="5px"
                $textAlign="center"
                $padding="2px"
                $fontSize={theme.font.Small6_11}
              >
                {item}
              </A.DivTag>
            ))}
          </div>
          <BottomHr />
          <ContentsP>
            <LeftTimeSpan>
              도착 예정 시간 : {expectedTime(props.createdAt, props.duration)}
            </LeftTimeSpan>
          </ContentsP>
        </InfoBox>
      </InfoWindowContainer>
      <InfoWindowArrow />
    </>
  );
}

export default InfoContents;

