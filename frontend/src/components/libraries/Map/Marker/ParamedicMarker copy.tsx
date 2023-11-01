import { useEffect, useState } from "react";
import { Tmapv3 } from "../Map";
import { ParamedicMarkerContainer } from "./ParamedicMarker.style";

function ParamedicMarker(props: any) {
    const [parList, setParList] = useState<any[]>([]);

    const updateMarker = () => {
        for (let i = 0; i < parList.length; i++) {
            parList[i].setMap(null);
        }
        let next:any[] = []
        for (var i = 0; i < props.parList.length; i++) {
            var lonlat = new Tmapv3.LatLng(props.parList[i].pos.lat, props.parList[i].pos.lon);
            // var title = props.parList[i].name;
            const size = new Tmapv3.Size(30, 30);
            const marker = new Tmapv3.Marker({
                position: lonlat,
                draggable : true,
                // color: positions[i].color,
                iconSize: size,
                // icon: props.parList[i].type,
                // label: title //Marker의 라벨.
            })
            marker.setMap(props.map);
            marker.on("Click", function(evt:any) {
                console.log(evt)
            });
            console.log("!!!!!marker", marker)
            next.push(marker);
        }
        setParList([...next]);
    }

    useEffect(() => {
        // console.log("props", props.map)
        if (props.map !== undefined && props.parList !== undefined) {
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