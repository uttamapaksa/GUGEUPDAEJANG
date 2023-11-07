import { useEffect, useState } from "react";
import { Tmapv3 } from "../../Map";
import { useRecoilState } from "recoil";
import { hospitalSelectedTransferItem } from "../../../../../recoils/HospitalAtoms";
import { ParamedicTransferMarkerContainer } from "./ParamedicTransferMarker.style";

function ParamedicTransferMarker(props: any) {
    const [paraTransferMarkers, setparaTransferMarkers] = useState<any[]>([]);
    const [paraTransferItem, setParaRequsetItem] = useRecoilState(hospitalSelectedTransferItem);

    const updateMarker = () => {
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            let next: any[] = []
            for (var i = 0; i < props.paraTransferList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.paraTransferList[i].curLat, props.paraTransferList[i].curLon);
                // var title = props.paraTransferList[i].name;
                const size = new Tmapv3.Size(30, 30);
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
                    setParaRequsetItem(tmp)
                });
                // console.log(marker)
                next.push(marker);
            }
            setparaTransferMarkers(next);
        }
    }
    const deleteMarker = () => {
        for (let i = 0; i < paraTransferMarkers.length; i++) {
            paraTransferMarkers[i].setMap(null);
        }
        setparaTransferMarkers([]);
    }

    useEffect(() => {
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            deleteMarker()
            if (paraTransferMarkers.length == 0) updateMarker()
        }
    }, [props]);
    useEffect(() => {
        if (paraTransferItem !== undefined)
            props.map.setCenter(new Tmapv3.LatLng(paraTransferItem.data.latitude, paraTransferItem.data.longitude));

    }, [paraTransferItem]);

    return (
        <ParamedicTransferMarkerContainer></ParamedicTransferMarkerContainer>
    );

    // return {
    //     paraTransferList,
    //     updateMarker
    // };
}

export default ParamedicTransferMarker;