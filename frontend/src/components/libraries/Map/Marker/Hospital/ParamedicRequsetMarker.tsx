import { useEffect, useState } from "react";
import { Tmapv3 } from "../../Map";
import { useRecoilState } from "recoil";
import { hospitalSelectedRequestItem } from "../../../../../recoils/HospitalAtoms";
import { deleteMarker } from "/src/constants/function";

function ParamedicRequestMarker(props: any) {
    const [paraRequestItem, setParaRequsetItem] = useRecoilState(hospitalSelectedRequestItem);

    const updateMarker = () => {
        if (props.map !== undefined) {
            deleteMarker(2);
        }
        var curPos = new Tmapv3.LatLng(props.pos.lat, props.pos.lon);
        const size = new Tmapv3.Size(30, 30);
        // console.log(lonlat)
        //Marker 객체 생성.
        const HospitalMarker = new Tmapv3.Marker({
            position: curPos,
            map: props.map,
            // color: positions[i].color,
            iconSize: size,
            icon: "/src/assets/hospital/map-marker-hospital.png",
            // label: title //Marker의 라벨.
        })
        if (props.map !== undefined && props.paraRequestList !== undefined) {
            console.log("RequestMarker", props.paraRequestList)
            for (var i = 0; i < props.paraRequestList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.paraRequestList[i].latitude, props.paraRequestList[i].longitude);
                // var title = props.paraRequestList[i].name;
                const size = new Tmapv3.Size(30, 30);
                const marker = new Tmapv3.Marker({
                    position: lonlat,
                    draggable: true,
                    map: props.map,
                    color: "#F66457",
                    iconSize: size,
                    // icon: props.paraRequestList[i].type,
                    // label: title //Marker의 라벨.
                })
                marker.name = props.paraRequestList[i].id
                const tmp = props.paraRequestList[i]
                marker.on("Click", () => {
                    setParaRequsetItem(tmp)
                });
            }
        }
    }

    useEffect(() => {
        if (props.map !== undefined) {
            updateMarker();
        }
    }, [props]);

    useEffect(() => {
        if (paraRequestItem != undefined)
            props.map.setCenter(new Tmapv3.LatLng(paraRequestItem.latitude, paraRequestItem.longitude));
    }, [paraRequestItem]);

    return (
        <></>
    );
}

export default ParamedicRequestMarker;