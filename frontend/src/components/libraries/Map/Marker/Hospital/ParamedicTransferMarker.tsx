import { useEffect } from "react";
import { Tmapv3 } from "../../Map";
import { useRecoilState } from "recoil";
import { hospitalSelectedTransferItem } from "../../../../../recoils/HospitalAtoms";
import { deleteMarker } from "/src/constants/function";

function ParamedicTransferMarker(props: any) {
    const [paraTransferItem, setParaTransferItem] = useRecoilState(hospitalSelectedTransferItem);

    const updateMarker = () => {
        if (props.map !== undefined) {
            deleteMarker(2);
        }
        var curPos = new Tmapv3.LatLng(props.pos.lat, props.pos.lon);
        const size = new Tmapv3.Size(30, 30);
        // console.log(lonlat)
        //Marker 객체 생성.
        const HospitalMarker = new Tmapv3.Marker({
            position: curPos,
            map: props.map,
            // color: positions[i].color,
            iconSize: size,
            icon: "/src/assets/hospital/map-marker-hospital.png",
            // label: title //Marker의 라벨.
        })
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            console.log("TransferMarker", props.paraTransferList)
            for (var i = 0; i < props.paraTransferList.length; i++) {
                let lonlat;
                if (props.paraTransferList[i].curLat !== undefined) {
                    lonlat = new Tmapv3.LatLng(props.paraTransferList[i].curLat, props.paraTransferList[i].curLon);
                }
                else {
                    lonlat = new Tmapv3.LatLng(props.paraTransferList[i].data.latitude, props.paraTransferList[i].data.longitude);
                }
                // var title = props.paraTransferList[i].name;
                const size = new Tmapv3.Size(35, 35);
                const marker = new Tmapv3.Marker({
                    position: lonlat,
                    draggable: true,
                    map: props.map,
                    // color: positions[i].color,
                    iconSize: size,
                    icon: "/src/assets/hospital/map-marker-ambulance.png",
                    // label: title //Marker의 라벨.
                })
                marker.name = props.paraTransferList[i].id
                const tmp = props.paraTransferList[i]
                marker.on("Click", () => {
                    setParaTransferItem(tmp)
                });
            }
        }
    }

    useEffect(() => {
        if (props.map !== undefined) {
            updateMarker();
        }
    }, [props]);
    useEffect(() => {
        if (paraTransferItem !== undefined) {
            if (paraTransferItem.curLat !== undefined) {
                props.map.setCenter(new Tmapv3.LatLng(paraTransferItem.curLat, paraTransferItem.curLon));
            }
            else {
                props.map.setCenter(new Tmapv3.LatLng(paraTransferItem.data.latitude, paraTransferItem.data.longitude));
            }
        }
    }, [paraTransferItem]);

    return (
        <></>
    );
}

export default ParamedicTransferMarker;