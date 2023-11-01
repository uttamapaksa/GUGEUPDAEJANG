import { ItemParaType, ItemRequestAt, } from "../ParamedicItem/ParamedicListItem.style";
import { CloseDiv, DetailItemContainer, ItemElapseMin, ItemAddr, ParamedicDetailContainer, ParamedicDetailContent, DetailItemBetween, ItemLeftTime } from "./ParamedicDetail.style";
import { BtnToggle } from "/src/components/Commons/Atoms/Button";
import { DivKtasInfo, DivTag } from "/src/components/Commons/Atoms/Div";
import theme from "/src/styles";

const ParamedicDetail = (props: any) => {

    return (
        <ParamedicDetailContainer>
            <ParamedicDetailContent>
                <DetailItemContainer>
                    <DivKtasInfo
                        $position="absolute"
                        $right="0%"
                        $top="0%"
                        $ktas={props.ktas}
                        $width="50px"
                        $height="25px"
                        $borderRadius="0px 0px 0px 10px"
                        $fontSize={theme.font.Small5_12}>
                        KTAS{props.ktas.charAt(4)}
                    </DivKtasInfo>
                    <ItemRequestAt>{props.requestAt}</ItemRequestAt>
                    <DetailItemBetween>
                        <ItemParaType>{props.paraType}</ItemParaType>
                        <ItemElapseMin>요청 대기 {props.elapseMin}분 경과</ItemElapseMin>
                    </DetailItemBetween>

                    <div style={{ width: "90%", margin: "0 auto" }}>
                        {props.paraTag.map((item: string, index: number) => (
                            <DivTag
                                key={index}
                                $margin="2px 5px 10px 2px"
                                $width="fit-content"
                                $height="18px"
                                $borderRadius="5px"
                                $textAlign="center"
                                $padding="2px"
                                $fontSize={theme.font.Small5_12}
                            >{item}</DivTag>
                        ))}
                    </div>

                    <video style={{ border: "1px solid gray" }}></video>
                    {/* <image></image> */}

                    <ItemAddr>{props.paraInfo}</ItemAddr>
                    <ItemAddr>{props.addr}</ItemAddr>
                    <DetailItemBetween>
                        <ItemElapseMin>{props.dist} km</ItemElapseMin>
                        <ItemLeftTime>{props.leftTime}분 이내 도착 가능</ItemLeftTime>
                    </DetailItemBetween>


                    <BtnToggle
                        $width="50%"
                        $height="50px"
                        $position="absolute"
                        $left="0%"
                        $bottom="0%"
                        $borderRadius="0px"
                        $color={theme.color.pinkDrak}
                        $fontSize={theme.font.Small1_16}
                        $boxShadow="0 0.2px 0.1px 0px inset"
                    >
                        거절
                    </BtnToggle>

                    <BtnToggle
                        $width="50%"
                        $height="50px"
                        $position="absolute"
                        $right="0%"
                        $bottom="0%"
                        $borderRadius="0px"
                        $color={theme.color.white}
                        $fontSize={theme.font.Small1_16}
                        $backgroundColor={theme.color.pinkDrak}
                        $boxShadow="0 0.2px 0.1px 0px inset">
                        승인
                    </BtnToggle>
                </DetailItemContainer>
            </ParamedicDetailContent>
            <CloseDiv onClick={props.onclick}>&lt;</CloseDiv>
        </ParamedicDetailContainer>
    );
};

export default ParamedicDetail;


// id: number,
// addr: string,
// pos: Position,
// ktas: string,
// elapseMin: number,
// leftTime: number,
// paraType: string,
// paraTag: string[],
// paraInfo: string,
// requestAt?: string,