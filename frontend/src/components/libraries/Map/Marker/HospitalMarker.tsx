import { useEffect } from "react";
import { MapProps, Tmapv3 } from "../Map";
import { HospitalMarkerContainer } from "./HospitalMarker.style";

function HospitalMarker(props: any) {
    useEffect(() => {
        console.log(props)
        if(props.hosList!==undefined && props.map!==undefined){
            for (var i = 0; i < props.hosList.length; i++) {//for문을 통하여 배열 안에 있는 값을 마커 생성
                var lonlat =  new Tmapv3.LatLng(props.hosList[i].pos.lat, props.hosList[i].pos.lon);
                var title = props.hosList[i].name;
                const size = new Tmapv3.Size(30, 30);
                console.log(props.hosList[i])
                // console.log(lonlat)
                //Marker 객체 생성.
                const marker = new Tmapv3.Marker({
                    position: lonlat, //Marker의 중심좌표 설정.
                    map: props.map, //Marker가 표시될 Map 설정
                    // color: positions[i].color,
                    iconSize: size,
                    // icon: props.hosList[i].type,
                    // icon: Tmapv3.asset.Icon.get('b_m_a'),
                    // label: title //Marker의 라벨.
                });
            }
        }

    }, [props]);

    return (
        <HospitalMarkerContainer>
        </HospitalMarkerContainer>
    );
}

export default HospitalMarker;