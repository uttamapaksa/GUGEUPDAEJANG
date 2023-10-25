import { useEffect } from "react";
import { MapProps, Tmapv3 } from "../Map";
import { ParamedicMarkerContainer } from "./ParamedicMarker.style";
import { useRecoilValue } from "recoil";
import { mapData } from "../mapAtom";

function ParamedicMarker(props: any) {
    // const map = useRecoilValue(mapData);
    useEffect(() => {
        console.log(props)
        if(props.parList!==undefined && props.map!==undefined){
            for (var i = 0; i < props.parList.length; i++) {//for문을 통하여 배열 안에 있는 값을 마커 생성
                var lonlat =  new Tmapv3.LatLng(props.parList[i].pos.lat, props.parList[i].pos.lon);
                var title = props.parList[i].name;
                const size = new Tmapv3.Size(30, 30);
                console.log(props.parList[i])
                // console.log(lonlat)
                //Marker 객체 생성.
                const marker = new Tmapv3.Marker({
                    position: lonlat, //Marker의 중심좌표 설정.
                    map: props.map, //Marker가 표시될 Map 설정
                    // color: positions[i].color,
                    iconSize: size,
                    // icon: props.parList[i].type,
                    // icon: Tmapv3.asset.Icon.get('b_m_a'),
                    // label: title //Marker의 라벨.
                });
            }
        }

    }, [props]);

    return (
        <ParamedicMarkerContainer>
        </ParamedicMarkerContainer>
    );
}

export default ParamedicMarker;