import { useEffect, useState } from "react";
import { MapProps, ParamedicItem, Tmapv3 } from "../Map";
import { ParamedicMarkerContainer } from "./ParamedicMarker.style";

function ParamedicMarker(props: any) {
    const [parList, setParList] = useState<any>([]);

    useEffect(() => {
        if (props.parList !== undefined && props.map !== undefined) {
            for (let i = 0; i < parList.length; i++) {
                parList[i].marker.setMap(null);
            }
            let next = []
            for (var i = 0; i < props.parList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.parList[i].pos.lat, props.parList[i].pos.lon);
                var title = props.parList[i].name;
                const size = new Tmapv3.Size(30, 30);
                const marker = new Tmapv3.Marker({
                    position: lonlat,
                    map: props.map,
                    // color: positions[i].color,
                    iconSize: size,
                    // icon: props.parList[i].type,
                    // label: title //Marker의 라벨.
                });
                next.push({marker:marker});
            }
            setParList(next);
        }

    }, [props]);

    return (
        <ParamedicMarkerContainer>
        </ParamedicMarkerContainer>
    );
}

export default ParamedicMarker;