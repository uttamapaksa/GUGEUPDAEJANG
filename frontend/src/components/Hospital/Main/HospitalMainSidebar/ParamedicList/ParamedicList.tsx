import { useState } from "react";
import ParamedicDetail from "../ParamedicDetail/ParamedicDetail";
import ParamedicListItem from "../ParamedicItem/ParamedicListItem";
import { ParamedicListContainer } from "./ParamedicList.style";
import { MapProps, ParamedicItem } from "/src/components/libraries/Map/Map";



const ParamedicList = (props: MapProps) => {
    const [paraItem, setParaItem] = useState<ParamedicItem | undefined>(undefined);

    const selectParaDetail = (props: ParamedicItem | undefined) => {
        setParaItem(props);
    }

    return (
        <>
            <ParamedicListContainer>
                {props.parList !== undefined ?
                    <>{props.parList.map((item, index) => (
                        <ParamedicListItem {...item}
                            onclick={() => selectParaDetail(item)}
                            isSelected={(paraItem !== undefined && paraItem.id == item.id)}
                        >
                        </ParamedicListItem>
                    ))}</> : <></>
                }

            </ParamedicListContainer>
            {paraItem !== undefined ? <ParamedicDetail {...paraItem} onclick={() => selectParaDetail(undefined)}></ParamedicDetail>
                : <></>}
        </>
    );
};

export default ParamedicList;