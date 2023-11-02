import { useEffect, useState } from "react";
import { Tmapv3 } from "../Map";
import { HospitalMarkerContainer } from "./HospitalMarker.style";

function HospitalMarker(props: any) {
    const [hosList, setHosList] = useState<any>([]);

    useEffect(() => {
        console.log(props)
        if (props.hosList !== undefined && props.map !== undefined) {
            for (let i = 0; i < hosList.length; i++) {
                hosList[i].marker.setMap(null);
            }
            let next = []
            for (var i = 0; i < props.hosList.length; i++) {
                console.log(props.hosList[i])
                var lonlat = new Tmapv3.LatLng(props.hosList[i].latitude, props.hosList[i].latitude);
                const size = new Tmapv3.Size(30, 30);
                console.log(props.hosList[i])
                // console.log(lonlat)
                //Marker 객체 생성.
                const marker = new Tmapv3.Marker({
                    position: lonlat, //Marker의 중심좌표 설정.
                    map: props.map, //Marker가 표시될 Map 설정
                    // color: positions[i].color,
                    iconSize: size,
                });
                next.push({marker:marker});
            }
            setHosList(next);
        }

    }, [props]);

    return (
        <HospitalMarkerContainer/>
    );
}

export default HospitalMarker;