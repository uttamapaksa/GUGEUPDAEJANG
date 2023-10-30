import { useState } from "react";
import ParamedicDetail from "../ParamedicDetail/ParamedicDetail";
import ParamedicListItem from "../ParamedicItem/ParamedicListItem";
import { ParamedicListContainer } from "./ParamedicList.style";
import { MapProps, ParamedicItem } from "/src/components/libraries/Map/Map";



const ParamedicList = (props: MapProps) => {
    const [paraItem, setParaItem] = useState<ParamedicItem | undefined>(undefined);

    const selectParaDetail = (props: ParamedicItem|undefined) => {
        console.log("sss")
        console.log(props)
        setParaItem(props);
    }

    return (
        <>
            <ParamedicListContainer>
                {props.parList !== undefined ?
                    <>{props.parList.map((item, index) => (
                        <ParamedicListItem {...item} onclick={() => selectParaDetail(item)}></ParamedicListItem>
                    ))}</> : <></>
                }

            </ParamedicListContainer>
            {paraItem !== undefined ? <ParamedicDetail {...paraItem} onclick={() => selectParaDetail(undefined)}></ParamedicDetail>
                : <></>}
        </>
    );
};

export default ParamedicList;

// {
//     id: 5,
//     addr: "주소",
//     pos: { lat: 37.565128, lon: 126.98883 },
//     ktas: 5,
//     elapseMin: 4,
//     leftTime: 11,
//     paraTag: ["추락", "과다출혈"],
//     paraInfo: "2층 높이 추락 사고 20대 여성 머리 출혈 환자 발생하였습니다.\n심정지 이력이 있는 환자입니다.",
//     requestAt: "오전 01:31",
//   },
