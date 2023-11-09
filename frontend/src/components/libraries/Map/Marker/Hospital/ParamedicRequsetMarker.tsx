import { useEffect, useState } from "react";
import { Tmapv3 } from "../../Map";
import { useRecoilState } from "recoil";
import { hospitalSelectedRequestItem } from "../../../../../recoils/HospitalAtoms";

function ParamedicRequestMarker(props: any) {
    const [paraRequestItem, setParaRequsetItem] = useRecoilState(hospitalSelectedRequestItem);

    const updateMarker = () => {
        if (props.map !== undefined && props.paraRequestList !== undefined) {
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
        if (props.map !== undefined && props.paraRequestList !== undefined) {
            console.log("~~~~~~~~~~~~updateMarker", props)
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