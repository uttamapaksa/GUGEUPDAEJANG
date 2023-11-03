import { useEffect, useState } from "react";
import { Tmapv3 } from "../Map";
import { ParamedicMarkerContainer } from "./ParamedicMarker.style";
import { useRecoilState } from "recoil";
import { hospitalSelectedParaId } from "../../../../recoils/HospitalAtoms";

function ParamedicMarker(props: any) {
    const [paraMarkers, setParaMarkers] = useState<any[]>([]);
    const [paraItem, setParaItem] = useRecoilState(hospitalSelectedParaId);

    const updateMarker = () => {
        if (props.map !== undefined && props.parList !== undefined) {
            let next: any[] = []
            for (var i = 0; i < props.parList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.parList[i].latitude, props.parList[i].longitude);
                // var title = props.parList[i].name;
                const size = new Tmapv3.Size(30, 30);
                const marker = new Tmapv3.Marker({
                    position: lonlat,
                    draggable: true,
                    map: props.map,
                    // color: positions[i].color,
                    iconSize: size,
                    // icon: props.parList[i].type,
                    // label: title //Marker의 라벨.
                })
                marker.name = props.parList[i].id
                const tmp = props.parList[i]
                marker.on("Click", () => {
                    setParaItem(tmp)
                });
                // console.log(marker)
                next.push(marker);
            }
            setParaMarkers(next);
        }
    }
    const deleteMarker = () => {
        for (let i = 0; i < paraMarkers.length; i++) {
            paraMarkers[i].setMap(null);
        }
        setParaMarkers([]);
    }

    useEffect(() => {
        if (props.map !== undefined && props.parList !== undefined) {
            deleteMarker()
            if (paraMarkers.length == 0) updateMarker()
        }
    }, [props]);
    useEffect(() => {
        if (paraItem != undefined)
            props.map.setCenter(new Tmapv3.LatLng(paraItem.latitude, paraItem.longitude));

    }, [paraItem]);

    return (
        <ParamedicMarkerContainer></ParamedicMarkerContainer>
    );

    // return {
    //     parList,
    //     updateMarker
    // };
}

export default ParamedicMarker;