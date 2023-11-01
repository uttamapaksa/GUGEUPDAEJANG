import { useEffect, useState } from "react";
import { Tmapv3 } from "../Map";
import { ParamedicMarkerContainer } from "./ParamedicMarker.style";
import { useRecoilState } from "recoil";
import { hospitalSelectedParaId } from "/src/components/Hospital/HospitalAtoms";

function ParamedicMarker(props: any) {
    const [paraMarkers, setParaMarkers] = useState<any[]>([]);
    const [paraItem, setParaItem] = useRecoilState(hospitalSelectedParaId);

    const updateMarker = () => {
        if (props.map !== undefined && props.parList !== undefined) {

            let next: any[] = []
            for (var i = 0; i < props.parList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.parList[i].pos.lat, props.parList[i].pos.lon);
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
                marker.on("Click", (evt: any) => {
                    setParaItem(tmp)
                });
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
        // console.log("props", props.map)
        if (props.map !== undefined && props.parList !== undefined) {
            deleteMarker()
            updateMarker()
        }
    }, [props]);

    return (
        <ParamedicMarkerContainer></ParamedicMarkerContainer>
    );

    // return {
    //     parList,
    //     updateMarker
    // };
}

export default ParamedicMarker;