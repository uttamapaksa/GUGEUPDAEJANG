import { renderToString } from "react-dom/server";
import { Tmapv3 } from "../Map";
import InfoContents from "./InfoContents";
import { ParamedicInfoContainer } from "./ParamedicInfo.style";
import { useEffect, useState } from 'react';

function ParamedicTransferInfo(props: any) {
    const updateInfo = () => {
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            // let info: any[] = []
            for (var i = 0; i < props.paraTransferList.length; i++) {
                var lonlat = new Tmapv3.LatLng(props.paraTransferList[i].curLat, props.paraTransferList[i].curLon);
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
            }
        }
    }
    useEffect(() => {
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            updateInfo();
        }
    }, [props]);

    return (
        <ParamedicInfoContainer>
        </ParamedicInfoContainer>
    );
}

export default ParamedicTransferInfo;