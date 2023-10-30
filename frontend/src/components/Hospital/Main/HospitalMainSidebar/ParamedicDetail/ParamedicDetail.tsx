import { CloseDiv, ParamedicDetailContainer, ParamedicDetailContent } from "./ParamedicDetail.style";
import { MapProps, ParamedicItem } from "/src/components/libraries/Map/Map";

const ParamedicDetail = (props: any) => {

    return (
        <ParamedicDetailContainer>
            <ParamedicDetailContent>
                {props.id}
                {props.addr}
                {props.ktas}
                {props.elapseMin}
                {props.leftTime}
                {props.paraType}
                {/* {props.paraTag} */}
                {props.paraInfo}
                {props.requestAt}
            </ParamedicDetailContent>
            <CloseDiv onClick={props.onclick}></CloseDiv>
        </ParamedicDetailContainer>
    );
};

export default ParamedicDetail;
