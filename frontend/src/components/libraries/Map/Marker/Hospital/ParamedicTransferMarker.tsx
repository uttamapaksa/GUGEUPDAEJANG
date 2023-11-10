import { useEffect } from "react";
import { Tmapv3 } from "../../Map";
import { useRecoilState } from "recoil";
import { hospitalSelectedTransferItem } from "../../../../../recoils/HospitalAtoms";

function ParamedicTransferMarker(props: any) {
    const [paraTransferItem, setParaTransferItem] = useRecoilState(hospitalSelectedTransferItem);

    const updateMarker = () => {
        if (props.map !== undefined && props.paraTransferList !== undefined) {
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
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            updateMarker();
        }
    }, [props]);
    useEffect(() => {
        if (paraTransferItem !== undefined) {
            let lonlat;
            if (paraTransferItem.curLat !== undefined) {
                lonlat = new Tmapv3.LatLng(paraTransferItem.curLat, paraTransferItem.curLon);
            }
            else {
                lonlat = new Tmapv3.LatLng(paraTransferItem.data.latitude, paraTransferItem.data.longitude);
            }
            props.map.setCenter(lonlat);
        }

    }, [paraTransferItem]);

    return (
        <></>
    );
}

export default ParamedicTransferMarker;