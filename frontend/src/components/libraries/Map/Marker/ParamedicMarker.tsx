import { useEffect, useState } from "react";
import { MapProps, ParamedicItem, Tmapv3 } from "../Map";
import { ParamedicMarkerContainer } from "./ParamedicMarker.style";

function ParamedicMarker(props: any) {
    const [parList, setParList] = useState<any[]>([]);
    // let parList:any = [];

    useEffect(() => {
        if (props.map !== undefined) {
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
                    map: props.map,
                    draggable : true,
                    // color: positions[i].color,
                    iconSize: size,
                    // icon: props.parList[i].type,
                    // label: title //Marker의 라벨.
                })
                marker.on("Click", () => {
                    console.log("1111")
                });
                marker.on("click", () => {
                    console.log("props.parList[i].id")
                });
                next.push(marker);
            }
            // console.log(next)
            // next.forEach((item:any) => {
            //     item.marker.on("click", function() {
            //         console.log("test")
            //     });
            // });
            setParList([...next]);
        }

    }, [props]);

    return (
        <ParamedicMarkerContainer>
        </ParamedicMarkerContainer>
    );
}

export default ParamedicMarker;