import { useEffect, useState } from "react";
import { MapContainer } from "./Map.style";
import ParamedicInfo from "./InfoWindow/ParamedicInfo";
import HospitalMarker from "./Marker/HospitalMarker";
import { MapProps } from "/src/types/map";
import ParamedicRequestMarker from "./Marker/Hospital/ParamedicRequsetMarker";
import ParamedicTransferMarker from "./Marker/Hospital/ParamedicTransferMarker";
import ParamedicTransferInfo from "./InfoWindow/ParamedicTransferInfo";
import MyHospitalMarker from "./Marker/Hospital/MyHospitalMarker";

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
    console.log("destroy")
    const curMap = document.querySelector("#map_div > div:nth-child(2)");
    console.log("curMap", curMap)
    if (curMap !== null) {
        curMap.remove();
    }
}

//props.type 의 구분에 따라 지도 반응형 크기 및 하위 컴포넌트 적용
function Map(props: MapProps) {
    const [map, setMap] = useState<any>();
    const [prevType, setPrevType] = useState<string>("");

    useEffect(() => {
        if (props.pos !== undefined && props.type != prevType) {
            if (map !== undefined) destroyMap();
            console.log("지도 prevType", prevType, props);
            console.log("mapchange")
            if (props.pos !== undefined) {
                const tmp = createMap(props.pos.lat, props.pos.lon);
                setMap(tmp);
                setPrevType(props.type);
            }
            else {
                let pos = {
                    lat: 36.4469365928189,
                    lon: 127.43940812262
                }
                const tmp = createMap(pos.lat, pos.lon);
                setMap(tmp);
                setPrevType(props.type);
            }
        }
    }, [prevType]);


    useEffect(() => {
        if (props.pos !== undefined && map !== undefined && props.type != prevType) {
            map.setCenter(new Tmapv3.LatLng(props.pos.lat, props.pos.lon));
            console.log("MapPos", props);
        }
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
                    {props.type === "request" ?
                        <>
                            <MyHospitalMarker {...props} map={map} />
                            <ParamedicRequestMarker {...props} map={map} />
                            <ParamedicInfo {...props} map={map} />
                        </> :
                        <></>}
                    {props.type === "transfer" ?
                        <>
                            <MyHospitalMarker {...props} map={map} />
                            <ParamedicTransferMarker {...props} map={map} />
                            <ParamedicTransferInfo {...props} map={map} />
                        </> :
                        <></>}

                </> :
                <></>
            }
        </>
    );
}

export default Map;