import { renderToString } from "react-dom/server";
import { Tmapv3 } from "../Map";
import InfoContents from "./InfoContents";
import { useEffect, useState } from 'react';

function ParamedicTransferInfo(props: any) {
    const updateInfo = () => {
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            // let info: any[] = []
            for (var i = 0; i < props.paraTransferList.length; i++) {
                let lonlat;
                if (props.paraTransferList[i].curLat !== undefined) {
                    lonlat = new Tmapv3.LatLng(props.paraTransferList[i].curLat, props.paraTransferList[i].curLon);
                }
                else {
                    lonlat = new Tmapv3.LatLng(props.paraTransferList[i].data.latitude, props.paraTransferList[i].data.longitude);
                }
                const infoWindow = new Tmapv3.InfoWindow({
                    position: lonlat,
                    offset: new Tmapv3.Point(0, -30),
                    content: renderToString(
                        <InfoContents {...props.paraTransferList[i].data}/>
                    ),
                    // props.paraTransferList[i].state === "wait" ? renderToString(
                    //     <InfoContents
                    //         id={props.paraTransferList[i].id}
                    //         ktas={props.paraTransferList[i].data.ktas}
                    //         addr={props.paraTransferList[i].data.address}
                    //         // distance={props.paraTransferList[i].data.distance}
                    //         requestAt={props.paraTransferList[i].data.createdAt}
                    //         leftTime={props.paraTransferList[i].data.duration}
                    //     />
                    // ) : renderToString(
                    //     <InfoContents
                    //         id={props.paraTransferList[i].id}
                    //         ktas={props.paraTransferList[i].data.ktas}
                    //         addr={props.paraTransferList[i].curAddr}
                    //         // distance={props.paraTransferList[i].leftDist}
                    //         requestAt={props.paraTransferList[i].data.createdAt}
                    //         leftTime={props.paraTransferList[i].data}
                    //     />
                    // ),
                    border: '0px solid #ffffff',
                    type: 2,
                    map: props.map
                });
            }
        }
    }
    useEffect(() => {
        if (props.map !== undefined && props.paraTransferList !== undefined) {
            console.log("~~~~~~~~~~~~updateInfo", props)
            updateInfo();
        }
    }, [props]);

    return (
        <></>
    );
}

export default ParamedicTransferInfo;