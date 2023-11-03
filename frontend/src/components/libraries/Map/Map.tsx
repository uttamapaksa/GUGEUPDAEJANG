import { useEffect, useState } from "react";
import { MapContainer } from "./Map.style";
import ParamedicInfo from "./InfoWindow/ParamedicInfo";
import HospitalMarker from "./Marker/HospitalMarker";
import { MapProps } from "/src/types/map";
import ParamedicMarker from "./Marker/ParamedicMarker";
import { useRecoilValue } from "recoil";
import { currentPosition } from "/src/recoils/HospitalAtoms";

declare global {
    interface Window {
        Tmapv3: any;
    }
}

export const { Tmapv3 } = window;
export const createMap = (lat: number, lon: number) => {
    console.log(lat, lon)
    return new Tmapv3.Map("map_div", {
        center: new Tmapv3.LatLng(lat, lon),
        width: "100%",
        height: "100%",
        // 지도의 범위
        zoom: 15,
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

    useEffect(() => {
        console.log(props)
        if (props.pos !== undefined) {
            let pos = {
                lat: 37.565128,
                lon: 126.98883
            }
            if(props.pos.lat!=null){
                pos = {
                    lat: props.pos.lat,
                    lon: props.pos.lon
                }
            }
            const tmp = createMap(pos.lat, pos.lon);
            console.log("tmp", tmp);
            setMap(tmp);
        }
    }, []);

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
                            <ParamedicMarker {...props} map={map} />
                            <ParamedicInfo {...props} map={map} />
                        </> :
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