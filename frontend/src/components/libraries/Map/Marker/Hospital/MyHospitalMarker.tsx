import { useEffect } from "react";
import { Tmapv3 } from "../../Map";
import { HospitalMarkerContainer } from "../HospitalMarker.style";
import { deleteMarker } from "/src/constants/function";

function MyHospitalMarker(props: any) {
    useEffect(() => {
        var lonlat = new Tmapv3.LatLng(props.pos.lat, props.pos.lon);
        const size = new Tmapv3.Size(30, 30);
        // console.log(lonlat)
        //Marker 객체 생성.
        const marker = new Tmapv3.Marker({
            position: lonlat,
            map: props.map,
            // color: positions[i].color,
            iconSize: size,
            icon: "/src/assets/hospital/map-marker-hospital.png",
            // label: title //Marker의 라벨.
        })
    }, []);
    useEffect(() => {
        if (props.map !== undefined) {
            deleteMarker();
        }
    }, [props]);

    return (
        <HospitalMarkerContainer />
    );
}

export default MyHospitalMarker;