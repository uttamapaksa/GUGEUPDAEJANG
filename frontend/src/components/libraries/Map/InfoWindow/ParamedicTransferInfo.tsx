import { renderToString } from "react-dom/server";
import { Tmapv3 } from "../Map";
import InfoContents from "./InfoContents";
import { ParamedicInfoContainer } from "./ParamedicInfo.style";
import { useEffect, useState } from 'react';


function ParamedicTransferInfo(props: any) {
    const [paraInfo, setParaInfo] = useState<any[]>([]);
    const updateInfo = () => {
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            let info: any[] = []
            for (var i = 0; i < props.paraTransferList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.paraTransferList[i].data.latitude, props.paraTransferList[i].data.longitude);
                const infoWindow = new Tmapv3.InfoWindow({
                    position: lonlat = lonlat,
                    offset: new Tmapv3.Point(0, -30),
                    content: renderToString(
                        <InfoContents
                            id={props.paraTransferList[i].id}
                            ktas={props.paraTransferList[i].data.ktas}
                            addr={props.paraTransferList[i].data.address}
                            requestAt={props.paraTransferList[i].data.createdAt}
                            elapseMin={"-"}
                            leftTime={props.paraTransferList[i].data.duration}
                        />
                    ),
                    border: '0px solid #ffffff',
                    type: 2,
                    map: props.map
                });
                info.push(infoWindow);
            }
            // console.log(info)
            setParaInfo(info);
        }
    }
    const deleteInfo = () => {
        console.log(paraInfo)
        for (let i = 0; i < paraInfo.length; i++) {
            paraInfo[i].setMap(null);
            // console.log()
        }
        setParaInfo([]);
    }
    useEffect(() => {
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            deleteInfo();
            if(paraInfo.length==0)updateInfo();
        }
    }, [props]);

    return (
        <ParamedicInfoContainer>
        </ParamedicInfoContainer>
    );
}

export default ParamedicTransferInfo;