import { useEffect } from "react";
import { Tmapv3 } from "../../Map";
// import { useRecoilState } from "recoil";
// import { hospitalSelectedRequestItem } from "../../../../../recoils/HospitalAtoms";

function HospitalMarkers(props: any) {
    // 이벤트 등록용 리코일
    // const [paraRequestItem, setParaRequsetItem] = useRecoilState(hospitalSelectedRequestItem);

    const updateMarker = () => {
        if (props.map !== undefined && props.hosList !== undefined) {
            for (var i = 0; i < props.hosList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.hosList[i].latitude, props.hosList[i].longitude);
                // var title = props.hosList[i].name;
                let color
                if(props.hosList[i].response !== undefined){
                    color = props.hosList[i].response === "accept" ? "#37b829" : props.hosList[i].response === "refuse" ? "#ff1500" : "#f6f157"
                }
                else{
                    color = "#F66457"
                }
                const size = new Tmapv3.Size(30, 30);
                const marker = new Tmapv3.Marker({
                    position: lonlat,
                    draggable: true,
                    map: props.map,
                    color: color,
                    iconSize: size,
                    // icon: props.hosList[i].type,
                    // label: title //Marker의 라벨.
                })
                marker.name = props.hosList[i].id
                
                // 마커 이벤트 등록용
                // const tmp = props.hosList[i]
                // marker.on("Click", () => {
                //     setParaRequsetItem(tmp)
                // });
            }
        }
    }

    useEffect(() => {
        if (props.map !== undefined && props.hosList !== undefined) {
            console.log("~~~~~~~~~~~~updateMarker", props)
            updateMarker();
        }
    }, [props]);

    // 마커 이벤트 실행용
    // useEffect(() => {
    //     if (paraRequestItem != undefined)
    //         props.map.setCenter(new Tmapv3.LatLng(paraRequestItem.latitude, paraRequestItem.longitude));
    // }, [paraRequestItem]);

    return (
        <></>
    );
}

export default HospitalMarkers;