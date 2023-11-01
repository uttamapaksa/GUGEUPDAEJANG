import { useEffect, useState } from "react";
import { MapContainer } from "./Map.style";
import ParamedicInfo from "./InfoWindow/ParamedicInfo";
// import ParamedicMarker from "./Marker/ParamedicMarker";
import HospitalMarker from "./Marker/HospitalMarker";
import { MapProps } from "/src/types/map";
import { renderToString } from "react-dom/server";
import InfoContents from "./InfoWindow/InfoContents";
import { useRecoilState } from "recoil";
import { hospitalSelectedParaId } from "../../Hospital/HospitalAtoms";
import ParamedicMarker from "./Marker/ParamedicMarker";

declare global {
    interface Window {
        Tmapv3: any;
    }
}

export const { Tmapv3 } = window;
export const createMap = (lat: number, lon: number) => {
    console.log(lat, lon)
    return new Tmapv3.Map("map_div", {
        center: new Tmapv3.LatLng(37.56520450, 126.98702028),
        width: "100%",
        height: "100%",
        // 지도의 범위
        zoom: 15,
        // zIndexMarker: 15,
        // zIndexInfoWindow: 10,
    })
}

//지도 제거
export const destroyMap = () => {
    const curMap = document.querySelector("#map_div > div:nth-child(2)");
    if (curMap !== null) {
        curMap.remove();
    }
}

//props.type 의 구분에 따라 지도 반응형 크기 및 하위 컴포넌트 적용
function Map(props: MapProps) {
    const [map, setMap] = useState();
    // const [paraInfo, setParaInfo] = useState<any[]>([]);
    // let parMarkers:any[] = [];
    const [selectedMarker, setSelectedMarker] = useState<number>();

    const [paraItem, setParaItem] = useRecoilState(hospitalSelectedParaId);
    
    useEffect(() => {
        if (props !== undefined) {
            const tmp = createMap(props.pos.lat, props.pos.lon);
            console.log("tmp", tmp);
            setMap(tmp);
        }
    }, []);

    //현위치 갱신 과정 추가
    useEffect(() => {
        // if (props.pos.lat !== null && map !== undefined) {
        //     var latlon = new Tmapv3.LatLng(props.pos.lat, props.pos.lon);
        //     const size = new Tmapv3.Size(30, 30)
        //     const marker = new Tmapv3.Marker({
        //         position: latlon,
        //         map: map,
        //         // color: positions[i].color,
        //         iconSize: size,
        //         // icon: props.parList[i].type,
        //         // label: title //Marker의 라벨.
        //     });
        //     marker.on("Click", function(evt:any) {
        //         console.log(evt)
        //         console.log("evt")
        //     });
        //     // console.log("marker", marker)
        // }
    }, [props]);

    return (
        <>
            <MapContainer id="map_div">
            </MapContainer >
            {map !== undefined ?
                <>
                    {props.type === "guest" ?
                        <><HospitalMarker {...props} map={map} /></> :
                        <></>}
                    {props.type === "paramedic" ?
                        <><HospitalMarker {...props} map={map} /></> :
                        <></>}
                    {props.type === "hospital" ?
                        <>
                        <ParamedicMarker {...props}
                            map={map} />
                            <ParamedicInfo {...props} map={map} /></> :
                        <>
                        </>
                    }
                </> :
                <></>
            }
        </>
    );
}

export default Map;